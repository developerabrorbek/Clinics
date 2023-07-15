import ExitModal from "../../assets//icons/exit-modal.svg";

const HomeCreateIncomeModal = () => {
  return (
    <>
      {/* <button
        role="button"
        className="me-2"
        data-bs-toggle="modal"
        data-bs-target={`#createHomeIncomeModal${data.id}`}
        alt="Read modal icon"
      ></button> */}

      <button
        className="btn btn-primary d-flex gap-2 align-items-center"
        data-bs-toggle="modal"
        data-bs-target="#createHomeIncomeModal"
        alt="Create modal icon"
      >
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

      <div
        className="modal fade"
        id="createHomeIncomeModal"
        tabIndex="-1"
        aria-labelledby="createHomeIncome"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content shadow-lg p-3">
            <div className="modal-header text-center">
              <h2 className="modal-title fs-4 text-center  w-100 text-body-secondary">
                Оприходование медикамента
              </h2>
              <img
                src={ExitModal}
                alt="exit modal"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body ">
              <form>
                <div className="form-head row row-cols-3 shadow-lg px-4 py-3 justify-content-between rounded-3 mb-3">
                  <label htmlFor="document">
                    <p className="text-body-secondary mb-1 fs-custom">
                      КОД ДОКУМЕНТА
                    </p>
                    <select
                      name="document"
                      id="document"
                      className="form-select form-select-sm text-secondary-emphasis"
                    >
                      <option value="0" selected>
                        Все документы
                      </option>
                      <option value="1">CL1001</option>
                      <option value="2">CL1002</option>
                    </select>
                  </label>
                  <label htmlFor="code-of-medicine">
                    <p className="text-body-secondary mb-1 fs-custom">
                      КОД СПИСОК МЕДИКАМЕНТОВ
                    </p>
                    <select
                      name="medicine-code"
                      id="medicine-code"
                      className="form-select form-select-sm text-secondary-emphasis w-100"
                    >
                      <option value="0" selected>
                        Все список медикаментов
                      </option>
                      <option value="1">DL1001</option>
                      <option value="2">DL1001</option>
                    </select>
                  </label>
                  <label htmlFor="dealer">
                    <p className="text-body-secondary mb-1 fs-custom">ДИЛЕР</p>
                    <select
                      disabled
                      name="dealer"
                      id="dealer"
                      className="form-select form-select-sm  text-secondary-emphasis w-100"
                    >
                      <option value="0">Выберите дилера</option>
                      <option value="1">ООО “My Pharm”</option>
                      <option value="2">ООО “My Pharm”</option>
                    </select>
                  </label>
                </div>

                <div className="form-body row row-cols-2 shadow-lg px-4 py-3  justify-content-between rounded-3 mb-3">
                  <div className="form-body__left d-grid gap-3">
                    <label htmlFor="medicine">
                      <p className="text-body-secondary mb-1 fs-custom">
                        МЕДИКАМЕНТ
                      </p>
                      <select
                        name="medicine"
                        id="medicine"
                        className="form-select form-select-sm text-secondary-emphasis w-100"
                      >
                        <option value="0" selected>
                          Все медикаменты
                        </option>
                        <option value="1">Парацетамол</option>
                        <option value="2">Парацетамол</option>
                      </select>
                    </label>
                    <label htmlFor="quantity">
                      <p className="text-body-secondary mb-1 fs-custom">
                        КОЛИЧЕСТВО
                      </p>
                      <select
                        disabled
                        name="quantity"
                        id="quantity"
                        className="form-select form-select-sm text-secondary-emphasis w-100"
                      >
                        <option value="0" selected>
                          Введите количество
                        </option>
                        <option value="1">100</option>
                        <option value="2">101</option>
                      </select>
                    </label>
                    <label htmlFor="unit">
                      <p className="text-body-secondary mb-1 fs-custom">
                        ЕДИНИЦА ИЗМЕРЕНИЯ
                      </p>
                      <select
                        disabled
                        name="unit"
                        id="unit"
                        className="form-select form-select-sm text-secondary-emphasis w-100"
                      >
                        <option value="0" selected>
                          Выберите единицу измерения
                        </option>
                        <option value="1">Капсула</option>
                        <option value="2">Капсула</option>
                      </select>
                    </label>
                    <label htmlFor="registration">
                      <p className="text-body-secondary mb-1 fs-custom">
                        ДАТА РЕГИСТРАЦИИ
                      </p>
                      <input
                        disabled
                        type="date"
                        name="registration"
                        id="registration"
                        className="form-control"
                      />
                    </label>
                    <label
                      htmlFor="status-of-payment"
                      className="d-flex align-items-center gap-3"
                    >
                      <p className="text-body-secondary mb-0 fs-custom">
                        СТАТУС ОПЛАТЫ :
                      </p>
                      <button
                        type="button"
                        id="status"
                        className="btn btn-success btn-sm"
                      >
                        Оплачено
                      </button>
                    </label>
                  </div>
                  <div className="form-body__right d-grid gap-3">
                    <label htmlFor="store">
                      <p className="text-body-secondary mb-1 fs-custom">
                        СКЛАД
                      </p>
                      <select
                        name="store"
                        id="store"
                        className="form-select form-select-sm text-secondary-emphasis w-100"
                      >
                        <option value="0" selected>
                          Все склады
                        </option>
                        <option value="1">Главный</option>
                        <option value="2">Главный</option>
                      </select>
                    </label>
                    <label htmlFor="quantity-taken">
                      <p className="text-body-secondary mb-1 fs-custom">
                        КОЛИЧЕСТВО ВЗЯТОГО
                      </p>
                      <select
                        name="quantity-taken"
                        id="quantity-taken"
                        className="form-select form-select-sm text-secondary-emphasis w-100"
                      >
                        <option value="0" selected>
                          Введите количество
                        </option>
                        <option value="1">100</option>
                        <option value="2">100</option>
                      </select>
                    </label>
                    <label htmlFor="unit-of-measurament">
                      <p className="text-body-secondary mb-1 fs-custom">
                        ЕДИНИЦА ИЗМЕРЕНИЯ ВЗЯТОГО
                      </p>
                      <select
                        name="unit-of-measurament"
                        id="unit-of-measurament"
                        className="form-select form-select-sm text-secondary-emphasis w-100"
                      >
                        <option value="0">Все единица измерения взятого</option>
                        <option value="1">Капсула</option>
                        <option value="2">Капсула</option>
                      </select>
                    </label>
                    <label htmlFor="date-of-cost">
                      <p className="text-body-secondary mb-1 fs-custom">
                        ДАТА ОПРИХОДОВАНИЕ
                      </p>
                      <input
                        disabled
                        type="date"
                        name="date-of-cost"
                        id="date-of-cost"
                        className="form-control"
                      />
                    </label>
                    <label htmlFor="status-of-posting">
                      <p className="text-body-secondary mb-1 fs-custom">
                        СТАТУС ОПРИХОДОВАНИЕ :
                      </p>
                      <select
                        name="status-of-posting"
                        id="status-of-posting"
                        className="form-select"
                      >
                        <option value="0" selected disabled>
                          Все статусы опрхидование
                        </option>
                      </select>
                    </label>
                  </div>
                  <div className="done mt-4 col-12">
                    <label
                      htmlFor="record-made"
                      className="d-flex align-items-center gap-3"
                    >
                      <p className="text-body-secondary mb-0  fs-custom">
                        ЗАПИСЬ СДЕЛАЛ :
                      </p>
                      <button
                        type="button"
                        className="btn btn-outline-secondary btn-sm"
                        disabled
                      >
                        Камрон Хамроевич Олимов
                      </button>
                    </label>
                  </div>
                </div>

                <div className="cancel d-flex justify-content-end gap-4">
                  <button type="submit" className="btn btn-success btn-sm px-4">
                    Сохранить
                  </button>
                  <button
                    type="button"
                    data-bs-dismiss="modal"
                    className="btn btn-secondary btn-sm px-4"
                  >
                    Отмена
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCreateIncomeModal;
