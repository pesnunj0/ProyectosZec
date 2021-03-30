// ************************************************************************************************************************************************************************************
// Como no logro que funcione [MasterDetailRelation(foreignKey: "idHoraExtra", IncludeColumns ="Empleado", MasterKeyField = "id")] en ExtrasRow justo encima de la lista,
// modifico MysSaveHandler y MyRetrieveHandler
// ************************************************************************************************************************************************************************************
namespace ProyectosZec.Kairos.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.ExtrasRow;

    public class ExtrasRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler().Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler().Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow> 
        {
            protected override void AfterSave()
            {
                base.AfterSave();

                if (Row.Consumidas != null)
                {
                    var mc = Entities.HorasExtraConsumidasRow.Fields;
                    var oldList = IsCreate ? null :
                        Connection.List<Entities.HorasExtraConsumidasRow>(
                            mc.IdHoraExtra == this.Row.Id.Value);

                    new Common.DetailListSaveHandler<Entities.HorasExtraConsumidasRow>(
                        oldList, Row.Consumidas,
                        x => x.IdHoraExtra = Row.Id.Value).Process(this.UnitOfWork);
                }
            }
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> 
        {
            protected override void OnReturn()
            {
                base.OnReturn();

                var mc = Entities.HorasExtraConsumidasRow.Fields;
                Row.Consumidas = Connection.List<Entities.HorasExtraConsumidasRow>(q => q
                    .SelectTableFields()
                    .Select(mc.Empleado)
                    .Where(mc.IdHoraExtra == Row.Id.Value));
            }
        }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}