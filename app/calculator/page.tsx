import { withLayout } from '@/layout/Layout';
import CalculatorForm from '@/components/CalculatorForm/CalculatorForm';

function Calculator() {
  return (
    <div>
      <CalculatorForm></CalculatorForm>
    </div>
  );
}

export default withLayout(Calculator);
