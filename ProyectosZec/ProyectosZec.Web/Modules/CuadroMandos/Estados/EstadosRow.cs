
namespace ProyectosZec.CuadroMandos.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Proyectos"), Module("CuadroMandos"), TableName("estados")]
    [DisplayName("Estados"), InstanceName("Estados")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("CuadroMandos.Estados")]
    public sealed class EstadosRow : Row, IIdRow, INameRow
    {
        [DisplayName("Estado Id"), Identity]
        public Int32? EstadoId
        {
            get { return Fields.EstadoId[this]; }
            set { Fields.EstadoId[this] = value; }
        }

        [DisplayName("Estado"), Size(20), NotNull, QuickSearch]
        public String Estado
        {
            get { return Fields.Estado[this]; }
            set { Fields.Estado[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.EstadoId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Estado; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public EstadosRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field EstadoId;
            public StringField Estado;
        }
    }
}
