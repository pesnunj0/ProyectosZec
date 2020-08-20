
namespace ProyectosZec.Inmovilizado.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Inmovilizado"), TableName("subtiposinmovilizado")]
    [DisplayName("Subtiposinmovilizado"), InstanceName("Subtiposinmovilizado")]
    [ReadPermission("Inmovilizado:General")]
    [ModifyPermission("Inmovilizado:General")]
    public sealed class SubtiposinmovilizadoRow : Row, IIdRow, INameRow
    {
        [DisplayName("Sub Tipo Inmovilizado Id"), Identity]
        public Int32? SubTipoInmovilizadoId
        {
            get { return Fields.SubTipoInmovilizadoId[this]; }
            set { Fields.SubTipoInmovilizadoId[this] = value; }
        }

        [DisplayName("Tipo Inmovilizado"), NotNull, ForeignKey("tiposinmovilizado", "TipoInmovilizadoId"), LeftJoin("jTipoInmovilizado"), TextualField("TipoInmovilizadoTipo")]
        public Int32? TipoInmovilizadoId
        {
            get { return Fields.TipoInmovilizadoId[this]; }
            set { Fields.TipoInmovilizadoId[this] = value; }
        }

        [DisplayName("Sub Tipo"), Size(75), NotNull, QuickSearch]
        public String SubTipo
        {
            get { return Fields.SubTipo[this]; }
            set { Fields.SubTipo[this] = value; }
        }

        [DisplayName("Tipo Inmovilizado Tipo"), Expression("jTipoInmovilizado.[Tipo]")]
        public String TipoInmovilizadoTipo
        {
            get { return Fields.TipoInmovilizadoTipo[this]; }
            set { Fields.TipoInmovilizadoTipo[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.SubTipoInmovilizadoId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.SubTipo; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SubtiposinmovilizadoRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field SubTipoInmovilizadoId;
            public Int32Field TipoInmovilizadoId;
            public StringField SubTipo;

            public StringField TipoInmovilizadoTipo;
        }
    }
}
