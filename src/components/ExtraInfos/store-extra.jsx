const StoreExtra = ({ extraData }) => {
  const data = { ...extraData };
  return (
    <>
      <div className="pharmacy__inner-extra shadow-lg py-3 px-4 rounded-3 bg-white mb-5">
        <h3 className="text-body-secondary text-center mb-4">
          Аптека : {data.name}
        </h3>
        <div className="info d-flex gap-4">
          <div className="info-first">
            <p> Наименование : {data.name}</p>
            <p>Сотрудники : {data.employee} </p>
          </div>
          <div className="info-second">
            <p> Этаж : {data.floor}</p>
            <p> Комната :{data.room} </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoreExtra;
