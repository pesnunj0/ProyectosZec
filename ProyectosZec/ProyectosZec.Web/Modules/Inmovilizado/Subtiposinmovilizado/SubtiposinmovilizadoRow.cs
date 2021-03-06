﻿
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
    [ReadPermission("Inmovilizado:Read")]
    [ModifyPermission("Inmovilizado:Modify")]
    [LookupScript("Inmovilizado.Subtiposinmovilizado")]
    public sealed class SubtiposinmovilizadoRow : Row, IIdRow, INameRow
    {
        [DisplayName("SubTipoInmovilizadoId"), Identity]
        public Int32? SubTipoInmovilizadoId
        {
            get { return Fields.SubTipoInmovilizadoId[this]; }
            set { Fields.SubTipoInmovilizadoId[this] = value; }
        }

        [DisplayName("TipoId"), NotNull, ForeignKey("tiposinmovilizado", "TipoInmovilizadoId"), LeftJoin("jTipoInmovilizado"), TextualField("TipoInmovilizadoTipo"),LookupInclude]
        [LookupEditor("Inmovilizado.Tiposinmovilizado")]
        public Int32? TipoInmovilizadoId
        {
            get { return Fields.TipoInmovilizadoId[this]; }
            set { Fields.TipoInmovilizadoId[this] = value; }
        }

        [DisplayName("SubTipo"), Size(75), NotNull, QuickSearch]
        public String SubTipo
        {
            get { return Fields.SubTipo[this]; }
            set { Fields.SubTipo[this] = value; }
        }

        [DisplayName("Tipo"), Expression("jTipoInmovilizado.[Tipo]")]
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
            public StringField SubTipo;
            public Int32Field TipoInmovilizadoId;
            public StringField TipoInmovilizadoTipo;
        }
    }
}
