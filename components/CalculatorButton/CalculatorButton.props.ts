export interface CalculatorButtonProps {
  type: 'value' | 'operation';
  value: string;
  className?: string;
  onClick?: () => void;
}
