const DealerExtra = ({ extraData }) => {
  const data = { ...extraData };
  return (
    <>
      <div className="pharmacy__inner-extra shadow-lg py-3 px-4 rounded-3 bg-white mb-5">
        <h3 className="text-body-secondary text-center mb-4">
          Дилер : {data.name}
        </h3>
        <div className="info d-flex gap-4">
          <div className="info-first">
            <p> Наименование : {data.name}</p>
            <p> Контакт : Алишер Х. С.</p>
            <p> Телефон : {data.tel} </p>
          </div>
          <div className="info-second">
            <p> Телефон 2 : {data.tel} </p>
            <p> Телеграм : Информация не добавлено </p>
            <p> Количество контрактов : {data.contract}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DealerExtra;
