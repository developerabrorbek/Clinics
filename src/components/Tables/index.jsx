import { HomeBtnOutlined, HomeBtnPrimary } from "../Buttons";

const AssetsTable = () => {
  return (
    <>
      <div className="incomes px-2">
        <div className="container-fluid px-5 pt-3">
          <div className="income__inner shadow-lg py-3 px-4 rounded-3 bg-white">
            <div className="income-links d-flex gap-5 mb-5">
              <HomeBtnPrimary />
              <HomeBtnOutlined />
            </div>
            <div className="income-body shadow-lg py-3 rounded-2">
              <h3 className="income-body__title text-center text-dark-emphasis mb-5">
                Список оприходованных медикаментов
              </h3>
              <hr />
              <div className="income-body__filters p-3 pb-4">
                <h4 className="income-body__filters-title text-dark-emphasis mb-4">
                  Фильтер
                </h4>
                <form className="income-body__filters-form d-flex gap-3 align-items-center">
                  <select
                    name="drug"
                    id="drug"
                    className="form-select w-auto text-body-secondary"
                  >
                    <option selected disabled>
                      Все препараты
                    </option>
                  </select>
                  <select
                    name="store"
                    id="store"
                    className="form-select w-auto text-body-secondary"
                  >
                    <option selected disabled>
                      Все склады
                    </option>
                  </select>
                  <select
                    name="dealer"
                    id="dealer"
                    className="form-select w-auto text-body-secondary"
                  >
                    <option selected disabled>
                      Все дилеры
                    </option>
                  </select>
                  <select
                    name="unit"
                    id="unit"
                    className="form-select w-auto text-body-secondary"
                  >
                    <option selected disabled>
                      Все единицы измерения
                    </option>
                  </select>
                  <select
                    name="status"
                    id="status"
                    className="form-select w-auto text-body-secondary"
                  >
                    <option selected disabled>
                      Все статусы
                    </option>
                  </select>
                  <select
                    name="contract"
                    id="contract"
                    className="form-select w-auto text-body-secondary"
                  >
                    <option selected disabled>
                      Все контракты
                    </option>
                  </select>
                </form>
              </div>
              <hr />
              <div className="income-body__table p-3">
                <div className="income-body__table--actoins d-flex justify-content-between">
                  <form className="income-body__left-form d-flex align-items-center gap-3">
                    <label
                      htmlFor="count"
                      className="d-flex align-align-items-end gap-3 text-body-secondary"
                    >
                      Показать записи
                    </label>
                    <select
                      name="count"
                      id="count"
                      className="form-select w-auto"
                    >
                      <option value="10">10</option>
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

                    <button className="btn btn-primary d-flex gap-2 align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_278_10473)">
                          <path
                            d="M14.9449 6.32017H9.75453V1.53015C9.75453 0.942372 9.23802 0.465698 8.60113 0.465698H7.44772C6.81083 0.465698 6.29432 0.942372 6.29432 1.53015V6.32017H1.104C0.467101 6.32017 -0.049408 6.79684 -0.049408 7.38462V8.44907C-0.049408 9.03684 0.467101 9.51352 1.104 9.51352H6.29432V14.3035C6.29432 14.8913 6.81083 15.368 7.44772 15.368H8.60113C9.23802 15.368 9.75453 14.8913 9.75453 14.3035V9.51352H14.9449C15.5818 9.51352 16.0983 9.03684 16.0983 8.44907V7.38462C16.0983 6.79684 15.5818 6.32017 14.9449 6.32017Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_278_10473">
                            <rect
                              width="17"
                              height="16"
                              fill="white"
                              transform="translate(-0.000488281)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      Добавить приход
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssetsTable;
