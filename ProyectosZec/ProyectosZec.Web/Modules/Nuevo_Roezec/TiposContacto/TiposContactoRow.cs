
namespace ProyectosZec.Nuevo_Roezec.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Roezec"), Module("Nuevo_Roezec"), TableName("tipos_contacto")]
    [DisplayName("Tipos Contacto"), InstanceName("Tipos Contacto")]
    [ReadPermission("Roezec:Read")]
    [ModifyPermission("Roezec:Modify")]
    [LookupScript("Nuevo_Roezec.TiposContacto")]
    public sealed class TiposContactoRow : Row, IIdRow, INameRow
    {
        [DisplayName("Contacto Id"), Column("Tipo_ContactoId"), Identity]
        public Int32? ContactoId
        {
            get { return Fields.ContactoId[this]; }
            set { Fields.ContactoId[this] = value; }
        }

        [DisplayName("Contacto"), Column("Tipo_Contacto"), Size(30), NotNull, QuickSearch]
        public String Contacto
        {
            get { return Fields.Contacto[this]; }
            set { Fields.Contacto[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ContactoId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Contacto; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TiposContactoRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ContactoId;
            public StringField Contacto;
        }
    }
}
