namespace _932021.Gaisin.Roman.lab11
{
    public class CalculatorDataModel
    {
        private readonly Random rnd = new Random();
        public int FirstValue;
        public int SecondValue;
        public int addition;
        public int subtraction;
        public int multiplication;
        public string division;

        public CalculatorDataModel()
        {
            FirstValue = rnd.Next(0, 9);
            SecondValue = rnd.Next(0, 9);

            addition = FirstValue + SecondValue;
            subtraction = FirstValue - SecondValue;
            multiplication = FirstValue * SecondValue;

            if (SecondValue != 0)
            {
                division = (FirstValue / SecondValue).ToString();
            }
            else
            {
                division = "Error";
            }

        }
    }
}