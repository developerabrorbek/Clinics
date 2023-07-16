const HomeMedicineFilters = ({ data }) => {
  return (
    <>
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
            <option disabled>Все препараты</option>
            <option value="0" selected>
              {data.name}
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
        </form>
      </div>
    </>
  );
};

export default HomeMedicineFilters;
