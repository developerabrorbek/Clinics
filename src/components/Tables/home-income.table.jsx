import HomeCreateIncomeModal from "../Modals/home-create-income.modal";
import HomeEditIncomeModal from "../Modals/home-edit-income.modal";
import HomeReadIncomeModal from "../Modals/home-read-income.modal";
import HomeWatchMedicineModal from "../Modals/home-watch-medicine.modal";
import SortIcon from "../../assets/icons/sort-icon.svg"
// import SortReverseIcon from "../../assets/icons/sort-reverse.svg"

const HomeIncomeTable = ({ tableData }) => {
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g clipPath="url(#clip0_278_10468)">
                  <path
                    d="M6.78956 -2.90625H9.25702C9.66724 -2.90625 9.99726 -2.51963 9.99726 -2.03906V4.03125H12.7022C13.2512 4.03125 13.5257 4.80811 13.1371 5.26338L8.44584 10.7628C8.21452 11.0338 7.83514 11.0338 7.60382 10.7628L2.90639 5.26338C2.51776 4.80811 2.79227 4.03125 3.34128 4.03125H6.04932V-2.03906C6.04932 -2.51963 6.37934 -2.90625 6.78956 -2.90625ZM15.9192 10.6797V14.7266C15.9192 15.2071 15.5891 15.5938 15.1789 15.5938H0.867649C0.457434 15.5938 0.127411 15.2071 0.127411 14.7266V10.6797C0.127411 10.1991 0.457434 9.8125 0.867649 9.8125H5.39236L6.90368 11.583C7.52363 12.3093 8.52295 12.3093 9.1429 11.583L10.6542 9.8125H15.1789C15.5891 9.8125 15.9192 10.1991 15.9192 10.6797ZM12.0946 13.8594C12.0946 13.4619 11.817 13.1367 11.4777 13.1367C11.1385 13.1367 10.8609 13.4619 10.8609 13.8594C10.8609 14.2568 11.1385 14.582 11.4777 14.582C11.817 14.582 12.0946 14.2568 12.0946 13.8594ZM14.0686 13.8594C14.0686 13.4619 13.791 13.1367 13.4517 13.1367C13.1124 13.1367 12.8348 13.4619 12.8348 13.8594C12.8348 14.2568 13.1124 14.582 13.4517 14.582C13.791 14.582 14.0686 14.2568 14.0686 13.8594Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_278_10468">
                    <rect
                      width="15.7918"
                      height="15.0312"
                      fill="white"
                      transform="translate(0.127411 0.5625)"
                    />
                  </clipPath>
                </defs>
              </svg>
              Экспорт
            </button>
            <HomeCreateIncomeModal/>
          </div>
        </div>
        <table className="table table-responsive table-bordered">
          <thead>
            <tr>
              <th>№ <img src={SortIcon} alt="sort icon" className="float-end" /></th>
              <th>НАИМЕНОВАНИЕ <img src={SortIcon} alt="sort icon" className="float-end" /></th>
              <th>ДИЛЕР <img src={SortIcon} alt="sort icon" className="float-end" /></th>
              <th>ДОГОВОР <img src={SortIcon} alt="sort icon" className="float-end" /></th>
              <th>ЕД. ИЗМЕРЕНИЯ <img src={SortIcon} alt="sort icon" className="float-end" /></th>
              <th>КОЛИЧ. <img src={SortIcon} alt="sort icon" className="float-end" /></th>
              <th>КОЛ. ВЗЯТОГО <img src={SortIcon} alt="sort icon" className="float-end" /></th>
              <th>КОЛ. ОСТАТОК <img src={SortIcon} alt="sort icon" className="float-end" /></th>
              <th>КОЛ. ВОЗВРАТА <img src={SortIcon} alt="sort icon" className="float-end" /></th>
              <th>ДАТА <img src={SortIcon} alt="sort icon" className="float-end" /></th>
              <th>ДЕЙСТВИЕ <img src={SortIcon} alt="sort icon" className="float-end" /></th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data) => {
              return (
                <>
                  <tr>
                    <td className="text-body-secondary">{data.number}</td>
                    <td className="text-primary"><HomeWatchMedicineModal data={data}/></td>
                    <td className="text-primary">{data.dealer}</td>
                    <td className="text-primary">{data.contract} </td>
                    <td className="text-body-secondary">{data.change} </td>
                    <td className="text-body-secondary">{data.kolich}</td>
                    <td className="text-body-secondary">{data.kolvz}</td>
                    <td className="text-body-secondary">{data.left}</td>
                    <td className="text-body-secondary">{data.vozv}</td>
                    <td className="text-body-secondary">{data.data}</td>
                    <td>
                      <HomeReadIncomeModal data={data} />
                      <HomeEditIncomeModal data={data} />
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>

        <div className="table-pagination d-flex align-items-center justify-content-between">
          <p className="table-pagination__text text-body-secondary">
            Показано от 1 до {tableData.length} из {tableData.length} записей
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

export default HomeIncomeTable;
