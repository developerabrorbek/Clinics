import SortIcon from "../../assets/icons/sort-icon.svg";
import SortIconReverse from "../../assets/icons/sort-reverse.svg";
import DownloadIcon from "../../assets/icons/download-icon.svg";
import HomeCreateExpenseModal from "../Modals/home-create-expense.modal";
import HomeEditExpenseModal from "../Modals/home-edit-expense.modal";
import HomeReadExpenseModal from "../Modals/home-read-expense.modal";
import HomeWatchMedicineModal from "../Modals/home-watch-medicine.modal";
import { useState } from "react";

const expenseTableData = [
  {
    id: 1,
    number: 1,
    name: "Парецатамол ",
    store: "Главный",
    chemist: "Неврология ",
    change: "5 лист / Коробка",
    kolich: 20,
    kolvz: 0,
    left: 520,
    status: (
      <button className="table-button btn btn-success px-1 pt-0 pb-1 text-center">
        Отдано
      </button>
    ),
    data: "2023-05-22",
  },
  {
    id: 2,
    number: 2,
    name: "Кетонал  ДУО ",
    store: "Главный",
    chemist: "Стационар  ",
    change: "Капслуа",
    kolich: 25,
    kolvz: 10,
    left: 350,
    status: (
      <button className="table-button btn btn-warning px-1 pt-0 pb-1 text-center">
        В ожидании
      </button>
    ),
    data: "2023-05-22",
  },
  {
    id: 3,
    number: 3,
    name: "Лориста 50мг ",
    store: "Главный",
    chemist: "Кордиология  ",
    change: "5 лист / Коробка",
    kolich: 15,
    kolvz: 0,
    left: 319,
    status: (
      <button className="table-button btn btn-danger px-1 pt-0 pb-1 text-center">
        Отказано
      </button>
    ),
    data: "2023-05-22",
  },
  {
    id: 4,
    number: 4,
    name: "Парецатамол ",
    store: "Главный",
    chemist: "Неврология ",
    change: "5 лист / Коробка",
    kolich: 50,
    kolvz: 12,
    left: 400,
    status: (
      <button className="table-button btn btn-success px-1 pt-0 pb-1 text-center">
        Отдано
      </button>
    ),
    data: "2023-05-22",
  },
];

const StoreExpenseTable = ({ tableData }) => {
  const [data, setData] = useState([...tableData]);
  const [order, setOrder] = useState("asc");
  const [icon, setIcon] = useState(SortIcon);

  const handleSort = (e) => {
    const column = e.target.dataset.column;
    const order = e.target.dataset.order;

    if (order == "asc") {
      setOrder("des");
      setIcon(SortIconReverse);
      const sortedData = data.sort((a, b) => {
        a[column].toString() < b[column].toString()
          ? 1
          : a[column].toString() > b[column].toString()
          ? -1
          : 0;
      });
      setData([...sortedData]);
    } else if (order == "des") {
      setOrder("asc");
      setIcon(SortIcon);
      const sortedData = data.sort((a, b) => {
        a[column].toString() > b[column].toString()
          ? 1
          : a[column].toString() < b[column].toString()
          ? -1
          : 0;
      });
      setData([...sortedData]);
    }
  };

  return (
    <>
      <div className="income-body__table p-3 d-flex justify-content-center flex-column gap-3">
        <div className="income-body__table--actions d-flex justify-content-between">
          <form className="income-body__left-form d-flex align-items-center gap-3">
            <label
              htmlFor="count"
              className="d-flex align-align-items-end gap-3 text-body-secondary"
            >
              Показать записи
            </label>
            <select name="count" id="count" className="form-select w-auto">
              <option value="10">10</option>
              <option value="5">5</option>
              <option value="15">15</option>
            </select>
          </form>

          <div className="income-body__right-actions d-flex gap-3 align-items-center">
            <form className="d-flex gap-3 align-items-center">
              <label htmlFor="search" className="text-body-secondary">
                Поиск:
              </label>
              <input
                type="text"
                name="search"
                id="search"
                className="form-control"
              />
            </form>
            <button className="export-button btn btn-custom-export text-primary border-0 d-flex gap-2 align-items-center">
              <img src={DownloadIcon} alt="download icon" />
              Экспорт
            </button>

            <HomeCreateExpenseModal data={tableData} />
          </div>
        </div>
        <table className="table table-responsive table-bordered">
          <thead>
            <tr>
              <th onClick={handleSort} data-column="number" data-order={order}>
                № <img src={icon} alt="sort icon" className="float-end" />
              </th>
              <th onClick={handleSort} data-column="name" data-order={order}>
                НАИМЕНОВАНИЕ{" "}
                <img src={icon} alt="sort icon" className="float-end" />
              </th>
              <th onClick={handleSort} data-column="store" data-order={order}>
                СКЛАД <img src={icon} alt="sort icon" className="float-end" />
              </th>
              <th onClick={handleSort} data-column="chemist" data-order={order}>
                АПТЕКА <img src={icon} alt="sort icon" className="float-end" />
              </th>
              <th onClick={handleSort} data-column="change" data-order={order}>
                ЕД. ИЗМЕРЕНИЯ{" "}
                <img src={icon} alt="sort icon" className="float-end" />
              </th>
              <th onClick={handleSort} data-column="kolich" data-order={order}>
                КОЛИЧ. <img src={icon} alt="sort icon" className="float-end" />
              </th>
              <th onClick={handleSort} data-column="kolvz" data-order={order}>
                КОЛ. ВЗЯТОГО{" "}
                <img src={icon} alt="sort icon" className="float-end" />
              </th>
              <th onClick={handleSort} data-column="left" data-order={order}>
                ОБ ОСТАТОК{" "}
                <img src={icon} alt="sort icon" className="float-end" />
              </th>
              <th onClick={handleSort} data-column="status" data-order={order}>
                СТАТУС <img src={icon} alt="sort icon" className="float-end" />
              </th>
              <th onClick={handleSort} data-column="data" data-order={order}>
                ДАТА <img src={icon} alt="sort icon" className="float-end" />
              </th>
              <th onClick={handleSort} data-column="action" data-order={order}>
                ДЕЙСТВИЕ{" "}
                <img src={icon} alt="sort icon" className="float-end" />
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((data) => {
              return (
                <>
                  <tr>
                    <td className="text-body-secondary">{data.number}</td>
                    <td className="text-primary">
                      <HomeWatchMedicineModal data={data} />
                    </td>
                    <td className="text-primary">{data.store}</td>
                    <td className="text-primary">{data.chemist} </td>
                    <td className="text-body-secondary">{data.change} </td>
                    <td className="text-body-secondary">{data.kolich}</td>
                    <td className="text-body-secondary">{data.kolvz}</td>
                    <td className="text-body-secondary">{data.left}</td>
                    <td className="text-body-secondary text-center">
                      {data.status}
                    </td>
                    <td className="text-body-secondary">{data.data}</td>
                    <td>
                      <HomeReadExpenseModal data={data} />
                      <HomeEditExpenseModal data={data} />
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>

        <div className="table-pagination d-flex align-items-center justify-content-between">
          <p className="table-pagination__text text-body-secondary">
            Показано от 1 до {data.length} из {data.length} записей
          </p>
          <ul className="table-pagination__body pagination d-flex gap-2">
            <li className="page-item disabled rounded-2 overflow-hidden">
              <span className="page-link">Предыдущий</span>
            </li>
            {[1].map((_, i) => {
              return (
                <>
                  <li className="page-item rounded-2 overflow-hidden">
                    <a className="page-link" href="#">
                      {i + 1}
                    </a>
                  </li>
                </>
              );
            })}
            <li className="page-item rounded-2 overflow-hidden">
              <a className="page-link" href="#">
                Следующий
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default StoreExpenseTable;
