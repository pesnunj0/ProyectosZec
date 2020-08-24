
namespace ProyectosZec.Inmovilizado.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Inmovilizado"), TableName("tiposinmovilizado")]
    [DisplayName("Tiposinmovilizado"), InstanceName("Tiposinmovilizado")]
    [ReadPermission("Inmovilizado:General")]
    [ModifyPermission("Inmovilizado:General")]
    [LookupScript("Inmovilizado.Iposinmovilizado")]
    public sealed class TiposinmovilizadoRow : Row, IIdRow, INameRow
    {
        [DisplayName("Tipo Inmovilizado Id"), Identity]
        public Int32? TipoInmovilizadoId
        {
            get { return Fields.TipoInmovilizadoId[this]; }
            set { Fields.TipoInmovilizadoId[this] = value; }
        }

        [DisplayName("Tipo"), Size(25), NotNull, QuickSearch]
        public String Tipo
        {
            get { return Fields.Tipo[this]; }
            set { Fields.Tipo[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.TipoInmovilizadoId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Tipo; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TiposinmovilizadoRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field TipoInmovilizadoId;
            public StringField Tipo;
        }
    }
}
