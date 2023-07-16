import SortIcon from "../../assets/icons/sort-icon.svg";
import ReadIcon from "../../assets/icons/eye-icon.svg";
import AddIcon from "../../assets/icons/add-icon.svg"
import EditIcon from "../../assets/icons/edit-icon.svg";
import SortIconReverse from "../../assets/icons/sort-reverse.svg";
import DownloadIcon from "../../assets/icons/download-icon.svg";
import { useState } from "react";

const StoreMainTable = ({ tableData }) => {
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
      <div className="store-body__table p-3 d-flex justify-content-center flex-column gap-3">
        <div className="store-body__table--actions d-flex justify-content-between">
          <form className="store-body__left-form d-flex align-items-center gap-3">
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

          <div className="store-body__right-actions d-flex gap-3 align-items-center">
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

            <button className="btn btn-primary d-flex gap-2 align-items-center">
              <img src={AddIcon} alt="add icon" />
              Добавить расход
            </button>
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
                СОТРУДНИКИ{" "}
                <img src={icon} alt="sort icon" className="float-end" />
              </th>
              <th onClick={handleSort} data-column="chemist" data-order={order}>
                ЭТАЖ / КОМНАТА{" "}
                <img src={icon} alt="sort icon" className="float-end" />
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
                    <td className="text-body-secondary">{data.id}</td>
                    <td className="text-primary">{data.name}</td>
                    <td className="text-primary">{data.employee}</td>
                    <td className="text-primary">{data.floor} </td>
                    <td>
                      <img src={ReadIcon} alt="read icon" role="button" className="me-2" />
                      <img src={EditIcon} alt="edit icon"  role="button"/>
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

export default StoreMainTable;
