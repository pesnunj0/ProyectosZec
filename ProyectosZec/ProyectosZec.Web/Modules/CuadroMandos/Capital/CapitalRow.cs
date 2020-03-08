
namespace ProyectosZec.CuadroMandos.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Proyectos"), Module("CuadroMandos"), TableName("capital")]
    [DisplayName("Capital"), InstanceName("Capital")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("CuadroMandos.Capital")]
    public sealed class CapitalRow : Row, IIdRow, INameRow
    {
        [DisplayName("Capital Id"), Identity]
        public Int32? CapitalId
        {
            get { return Fields.CapitalId[this]; }
            set { Fields.CapitalId[this] = value; }
        }

        [DisplayName("Capital"), Size(20), NotNull, QuickSearch]
        public String Capital
        {
            get { return Fields.Capital[this]; }
            set { Fields.Capital[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CapitalId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Capital; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CapitalRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CapitalId;
            public StringField Capital;
        }
    }
}
