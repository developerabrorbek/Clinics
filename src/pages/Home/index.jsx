import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Header from "../../components/Header";
import HomeIncomeFilters from "../../components/TableFilters/home-income.filters";
import HomeIncomeTable from "../../components/Tables/home-income.table";
import { useState } from "react";
import HomeExpenseFilters from "../../components/TableFilters/home-expense.filter";
import HomeExpenseTable from "../../components/Tables/home-expense.table";

const incomeTableData = [
  {
    id: 1,
    number: 1,
    name: "Парецатамол",
    dealer: "ООО “My Pharm”",
    contract: "C10001",
    change: "5 лист / Коробка",
    kolich: "100",
    kolvz: "100",
    left: 0,
    vozv: 0,
    data: "2023-05-22",
  },
  {
    id: 2,
    number: 2,
    name: "Парецатамол",
    dealer: "ООО “My Pharm”",
    contract: "C10001",
    change: "5 лист / Коробка",
    kolich: "100",
    kolvz: "100",
    left: 0,
    vozv: 0,
    data: "2023-05-22",
  },
  {
    id: 3,
    number: 3,
    name: "Парецатамол",
    dealer: "ООО “My Pharm”",
    contract: "C10001",
    change: "5 лист / Коробка",
    kolich: "100",
    kolvz: "100",
    left: 0,
    vozv: 0,
    data: "2023-05-22",
  },
  {
    id: 4,
    number: 4,
    name: "Парецатамол",
    dealer: "ООО “My Pharm”",
    contract: "C10001",
    change: "5 лист / Коробка",
    kolich: 100,
    kolvz: 100,
    left: 0,
    vozv: 0,
    data: "2023-05-22",
  },
];

const expenseTableData = [
  {
    id: 1,
    number: 1,
    name: "Главный",
    chemist: "Неврология ",
    contract: "C10001",
    change: "5 лист / Коробка",
    kolich: "100",
    kolvz: "100",
    left: 319,
    status: <button className="table-button btn btn-success px-1 py-1 text-center">Отдано</button>,
    data: "2023-05-22",
  },
  {
    id: 2,
    number: 2,
    name: "Главный",
    chemist: "Неврология ",
    contract: "C10001",
    change: "5 лист / Коробка",
    kolich: "100",
    kolvz: "100",
    left: 319,
    status: <button className="table-button btn btn-warning px-1 py-1 text-center">В ожидании</button>,
    data: "2023-05-22",
  },
  {
    id: 3,
    number: 3,
    name: "Главный",
    chemist: "Неврология ",
    contract: "C10001",
    change: "5 лист / Коробка",
    kolich: "100",
    kolvz: "100",
    left: 319,
    status: <button className="table-button btn btn-danger px-1 py-1 text-center">Отказано</button>,
    data: "2023-05-22",
  },
  {
    id: 4,
    number: 4,
    name: "Главный",
    chemist: "Неврология ",
    contract: "C10001",
    change: "5 лист / Коробка",
    kolich: "100",
    kolvz: "100",
    left: 319,
    status: <button className="table-button btn btn-success px-1 py-1 text-center">Отдано</button>,
    data: "2023-05-22",
  },
];

const Home = () => {
  const [isIncome, setIsIncome] = useState(true);

  const activeButtonClass = "btn btn-primary px-4 py-2";
  const inActiveButtonClass = "btn btn-outline-primary px-4 py-2";
  return (
    <>
      <Header />
      <main className="main mb-5">
        <Hero />
        <Navbar />
        <div className="incomes px-2">
          <div className="container-fluid px-5 pt-3">
            <div className="income__inner shadow-lg py-3 px-4 rounded-3 bg-white">
              <div className="income-links d-flex gap-5 mb-5">
                <button
                  onClick={() => {
                    setIsIncome(true);
                  }}
                  className={isIncome ? activeButtonClass : inActiveButtonClass}
                >
                  Приход
                </button>
                <button
                  onClick={() => {
                    setIsIncome(false);
                  }}
                  className={isIncome ? inActiveButtonClass : activeButtonClass}
                >
                  Расход
                </button>
              </div>
              <div className="income-body shadow-lg py-3 rounded-2">
                <h3 className="income-body__title text-center text-dark-emphasis mb-5">
                  Список {isIncome ? "оприходованных" : "выданных"} медикаментов
                </h3>
                <hr />
                {isIncome ? <HomeIncomeFilters /> : <HomeExpenseFilters />}
                <hr />
                {isIncome ? (
                  <HomeIncomeTable tableData={incomeTableData} />
                ) : (
                  <HomeExpenseTable tableData={expenseTableData} />
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
