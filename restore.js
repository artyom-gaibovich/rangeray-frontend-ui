const fs = require('fs');
const path = require('path');

async function restoreFromSnapshot(
  snapshotFile,
  outputDirectory = './restored'
) {
  try {
    // Проверяем существование файла снимка
    if (!fs.existsSync(snapshotFile)) {
      throw new Error(`Файл снимка ${snapshotFile} не существует`);
    }

    // Читаем содержимое файла снимка
    const snapshotContent = fs.readFileSync(snapshotFile, 'utf8');

    // Разбиваем на отдельные файлы
    const fileSections = snapshotContent
      .split(/\n\n(?=\/\/)/)
      .filter((section) => section.trim());

    let restoredFiles = 0;
    let restoredDirs = new Set();

    console.log(`Найдено секций файлов: ${fileSections.length}`);

    for (const section of fileSections) {
      try {
        // Извлекаем путь к файлу и содержимое
        const firstLineEnd = section.indexOf('\n');
        if (firstLineEnd === -1) continue;

        const filePathLine = section.substring(0, firstLineEnd).trim();
        const content = section.substring(firstLineEnd + 1).trim();

        // Проверяем формат строки пути
        if (!filePathLine.startsWith('//')) {
          console.log(
            `Пропускаем некорректную секцию: ${filePathLine.substring(0, 50)}...`
          );
          continue;
        }

        const relativeFilePath = filePathLine.substring(2); // Убираем '//'

        // Пропускаем пустые пути
        if (!relativeFilePath) {
          console.log('Пропускаем файл с пустым путем');
          continue;
        }

        // Создаем полный путь для восстановления
        const fullOutputPath = path.join(outputDirectory, relativeFilePath);
        const fileDir = path.dirname(fullOutputPath);

        // Создаем директории, если они не существуют
        if (!restoredDirs.has(fileDir)) {
          fs.mkdirSync(fileDir, { recursive: true });
          restoredDirs.add(fileDir);
          console.log(`Создана директория: ${fileDir}`);
        }

        // Записываем файл
        fs.writeFileSync(fullOutputPath, content, 'utf8');
        console.log(`Восстановлен файл: ${relativeFilePath}`);
        restoredFiles++;
      } catch (error) {
        console.error(`Ошибка при обработке секции:`, error.message);
      }
    }

    console.log(`\n✅ Восстановление завершено!`);
    console.log(`Создано директорий: ${restoredDirs.size}`);
    console.log(`Восстановлено файлов: ${restoredFiles}`);
    console.log(`Целевая директория: ${outputDirectory}`);
  } catch (error) {
    console.error('Ошибка при восстановлении:', error.message);
  }
}

// Улучшенная версия с валидацией и дополнительными опциями
async function advancedRestore(
  snapshotFile,
  outputDirectory = './restored',
  options = {}
) {
  const {
    overwrite = false, // Перезаписывать существующие файлы
    verbose = true, // Подробный вывод
    encoding = 'utf8', // Кодировка файлов
    skipEmpty = true, // Пропускать пустые файлы
  } = options;

  try {
    if (!fs.existsSync(snapshotFile)) {
      throw new Error(`Файл снимка ${snapshotFile} не существует`);
    }

    const snapshotContent = fs.readFileSync(snapshotFile, encoding);
    const fileSections = snapshotContent
      .split(/\n\n+(?=\/\/)/)
      .filter((section) => section.trim());

    let restoredFiles = 0;
    let skippedFiles = 0;
    let restoredDirs = new Set();
    let errors = 0;

    if (verbose) {
      console.log(`📁 Восстановление из: ${snapshotFile}`);
      console.log(`🎯 Целевая директория: ${outputDirectory}`);
      console.log(`📊 Найдено секций: ${fileSections.length}`);
      console.log('─'.repeat(50));
    }

    for (let i = 0; i < fileSections.length; i++) {
      const section = fileSections[i];

      try {
        const lines = section.split('\n');
        const filePathLine = lines[0].trim();

        if (!filePathLine.startsWith('//')) {
          if (verbose) console.log(`❌ Некорректный формат в секции ${i + 1}`);
          errors++;
          continue;
        }

        const relativeFilePath = filePathLine.substring(2);
        const content = lines.slice(1).join('\n').trim();

        // Пропускаем пустые файлы если нужно
        if (skipEmpty && !content) {
          if (verbose)
            console.log(`⏭️  Пропуск пустого файла: ${relativeFilePath}`);
          skippedFiles++;
          continue;
        }

        const fullOutputPath = path.join(outputDirectory, relativeFilePath);
        const fileDir = path.dirname(fullOutputPath);

        // Проверяем существование файла
        if (fs.existsSync(fullOutputPath) && !overwrite) {
          if (verbose)
            console.log(`⏭️  Файл существует, пропускаем: ${relativeFilePath}`);
          skippedFiles++;
          continue;
        }

        // Создаем директорию
        if (!restoredDirs.has(fileDir)) {
          fs.mkdirSync(fileDir, { recursive: true });
          restoredDirs.add(fileDir);
          if (verbose) console.log(`📂 Создана директория: ${fileDir}`);
        }

        // Записываем файл
        fs.writeFileSync(fullOutputPath, content, encoding);
        restoredFiles++;

        if (verbose) {
          console.log(
            `✅ [${i + 1}/${fileSections.length}] ${relativeFilePath}`
          );
        }
      } catch (error) {
        console.error(`❌ Ошибка в секции ${i + 1}:`, error.message);
        errors++;
      }
    }

    // Итоговый отчет
    console.log('\n' + '═'.repeat(50));
    console.log('📊 ИТОГИ ВОССТАНОВЛЕНИЯ:');
    console.log('═'.repeat(50));
    console.log(`✅ Восстановлено файлов: ${restoredFiles}`);
    console.log(`⏭️  Пропущено файлов: ${skippedFiles}`);
    console.log(`📂 Создано директорий: ${restoredDirs.size}`);
    console.log(`❌ Ошибок: ${errors}`);
    console.log(`🎯 Целевая директория: ${path.resolve(outputDirectory)}`);

    if (errors === 0 && restoredFiles > 0) {
      console.log('\n✨ Восстановление завершено успешно!');
    }
  } catch (error) {
    console.error('💥 Критическая ошибка:', error.message);
  }
}

// Функция для создания полного цикла: снимок + восстановление
async function createAndRestoreSnapshot(
  sourceDir,
  snapshotFile,
  restoreDir,
  options = {}
) {
  console.log('🚀 Запуск полного цикла: создание снимка и восстановление\n');

  // Сначала создаем снимок
  await createSnapshot(sourceDir, snapshotFile, options);
  console.log('\n' + '─'.repeat(50));

  // Затем восстанавливаем
  await advancedRestore(snapshotFile, restoreDir, options);
}

// Вспомогательная функция для создания снимка (аналогичная предыдущей)
async function createSnapshot(directoryPath, outputFile, options = {}) {
  const { excludeDirs = ['node_modules', '.git'], encoding = 'utf8' } = options;

  try {
    if (!fs.existsSync(directoryPath)) {
      throw new Error(`Директория ${directoryPath} не существует`);
    }

    fs.writeFileSync(outputFile, '', encoding);
    let processedFiles = 0;

    async function processDirectory(currentPath, relativePath = '') {
      const items = await fs.promises.readdir(currentPath, {
        withFileTypes: true,
      });

      for (const item of items) {
        const itemPath = path.join(currentPath, item.name);
        const itemRelativePath = path.join(relativePath, item.name);

        if (item.isDirectory()) {
          if (!excludeDirs.includes(item.name)) {
            await processDirectory(itemPath, itemRelativePath);
          }
        } else if (item.isFile()) {
          try {
            const content = await fs.promises.readFile(itemPath, encoding);
            const entry = `//${itemRelativePath}\n${content}\n\n`;

            await fs.promises.appendFile(outputFile, entry, encoding);
            console.log(`📁 Добавлен файл: ${itemRelativePath}`);
            processedFiles++;
          } catch (error) {
            console.error(
              `Ошибка при чтении файла ${itemRelativePath}:`,
              error.message
            );
          }
        }
      }
    }

    await processDirectory(directoryPath);
    console.log(`\n📋 Снимок создан: ${outputFile} (${processedFiles} файлов)`);
  } catch (error) {
    console.error('Ошибка при создании снимка:', error.message);
  }
}

const snapshotFile = process.argv[2] || './snapshot.txt';
const restoreDirectory = process.argv[3] || './restored';

createSnapshot('./app/projects', 'snapshot.txt');
