
namespace ProyectosZec.Kairos.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Kairos"), Module("Kairos"), TableName("[dbo].[Tipos_fichaje]")]
    [DisplayName("Tipos Fichaje"), InstanceName("Tipos Fichaje")]
    [ReadPermission("Kairos:Read")]
    [ModifyPermission("Kairos:Modify")]
    [InsertPermission("Kairos:Insert")]
    [DeletePermission("Kairos:Delete")]
    [LookupScript("Kairos.TiposFichaje")]
    public sealed class TiposFichajeRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Size(1), PrimaryKey, QuickSearch]
        public String Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Tipo"), Size(20), NotNull]
        public String Tipo
        {
            get { return Fields.Tipo[this]; }
            set { Fields.Tipo[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Tipo; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TiposFichajeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField Id;
            public StringField Tipo;
        }
    }
}
