
namespace ProyectosZec.Intranet.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Intranet"), TableName("sedes")]
    [DisplayName("Sedes"), InstanceName("Sedes")]
    [ReadPermission("Telefonos:Read")]
    [ModifyPermission("Telefonos:Modify")]
    [LookupScript("Intranet.Sedes")]
    public sealed class SedesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Sede Id"), Identity]
        public Int32? SedeId
        {
            get { return Fields.SedeId[this]; }
            set { Fields.SedeId[this] = value; }
        }

        [DisplayName("Sede"), Size(25), NotNull, QuickSearch]
        public String Sede
        {
            get { return Fields.Sede[this]; }
            set { Fields.Sede[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.SedeId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Sede; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SedesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field SedeId;
            public StringField Sede;
        }
    }
}
