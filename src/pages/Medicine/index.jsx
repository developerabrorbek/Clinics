

import { useState } from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Header from "../../components/Header";
import HomeIncomeFilters from "../../components/TableFilters/home-income.filters";
import HomeIncomeTable from "../../components/Tables/home-income.table";
import HomeExpenseFilters from "../../components/TableFilters/home-expense.filter";
import HomeExpenseTable from "../../components/Tables/home-expense.table";


const Medicine = () => {

  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <Navbar />
        <div className="incomes px-2">
          <div className="container-fluid px-5 pt-3">
            <div className="income__inner shadow-lg py-3 px-4 rounded-3 bg-white">
              <h1>Page is not exists </h1>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Medicine;
