using System;

namespace Calculator
{
    class Program
    {
        static void Main(string[] args)
        {
            while (true)
            {
                Console.WriteLine();
                Console.WriteLine("========= МЕНЮ =========");
                Console.WriteLine("1. Ввести два числа");
                Console.WriteLine("2. Выполнить сложение");
                Console.WriteLine("3. Выполнить вычитание");
                Console.WriteLine("4. Выполнить деление");
                Console.WriteLine("5. Выполнить умножение");
                Console.WriteLine("0. Выход");
                Console.Write("Выберите пункт меню: ");

                string choice = Console.ReadLine();
                Console.WriteLine();

                if (choice == "1")
                {
                    Console.Write("Введите первое число: ");
                    double a = double.Parse(Console.ReadLine());

                    Console.Write("Введите второе число: ");
                    double b = double.Parse(Console.ReadLine());

                    Console.WriteLine("Вы ввели: " + a + " и " + b);
                }
                else if (choice == "2")
                {
                    Console.Write("Введите первое число: ");
                    double a = double.Parse(Console.ReadLine());

                    Console.Write("Введите второе число: ");
                    double b = double.Parse(Console.ReadLine());

                    double result = a + b;
                    Console.WriteLine(a + " + " + b + " = " + result);
                }
                else if (choice == "3")
                {
                    Console.Write("Введите первое число: ");
                    double a = double.Parse(Console.ReadLine());

                    Console.Write("Введите второе число: ");
                    double b = double.Parse(Console.ReadLine());

                    double result = a - b;
                    Console.WriteLine(a + " - " + b + " = " + result);
                }
                else if (choice == "4")
                {
                    Console.Write("Введите первое число: ");
                    double a = double.Parse(Console.ReadLine());

                    Console.Write("Введите второе число: ");
                    double b = double.Parse(Console.ReadLine());

                    if (b == 0)
                    {
                        Console.WriteLine("На ноль делить нельзя!");
                    }
                    else
                    {
                        double result = a / b;
                        Console.WriteLine(a + " / " + b + " = " + result);
                    }
                }
                else if (choice == "5")
                {
                    Console.Write("Введите первое число: ");
                    double a = double.Parse(Console.ReadLine());

                    Console.Write("Введите второе число: ");
                    double b = double.Parse(Console.ReadLine());

                    double result = a * b;
                    Console.WriteLine(a + " * " + b + " = " + result);
                }
                else if (choice == "0")
                {
                    Console.WriteLine("Выход из программы.");
                    break;
                }
                else
                {
                    Console.WriteLine("Такого пункта меню нет. Попробуйте ещё раз.");
                }
            }
        }
    }
}
