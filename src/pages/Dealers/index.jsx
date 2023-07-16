import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Header from "../../components/Header";
import DealersMainTable from "../../components/Tables/dealers-main.table";

const dealersTableData = [
  {
    id: 1,
    name: "OOO “My Pharm” ",
    face: "Jamshid Vahobov ",
    tel: "+99899 999 99 99",
    contract: 12,
  },
  {
    id: 2,
    name: "OOO “My Pharm” ",
    face: "Jamshid Vahobov ",
    tel: "+99899 999 99 99",
    contract: 11,
  },
  {
    id: 3,
    name: "OOO “My Pharm” ",
    face: "Jamshid Vahobov ",
    tel: "+99811 111 11 11",
    contract: 10,
  },
];

const Delaers = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <Navbar />
        <div className="incomes px-2">
          <div className="container-fluid px-5 pt-3">
            <div className="income__inner shadow-lg py-3 px-4 rounded-3 bg-white">
              <div className="income-body shadow-lg py-3 rounded-2">
                <h3 className="income-body__title text-center text-dark-emphasis mb-5">
                  Список дилеров
                </h3>
                <hr />
                <DealersMainTable tableData={dealersTableData}/>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Delaers;
