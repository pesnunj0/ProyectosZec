
namespace ProyectosZec.Roezec.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Roezec"), Module("Roezec"), TableName("roezec_estados")]
    [DisplayName("Roezec Estados"), InstanceName("Roezec Estados")]
    [ReadPermission("Roezec:Read")]
    [ModifyPermission("Roezec:Modify")]
    [InsertPermission("Roezec:Insert")]
    [DeletePermission("Roezec:Delete")]
    [LookupScript("Roezec.RoezecEstados")]
    
    public sealed class RoezecEstadosRow : Row, IIdRow, INameRow
    {
        [DisplayName("Codigo"), Column("codigo"), Size(255), PrimaryKey, QuickSearch]
        public String Codigo
        {
            get { return Fields.Codigo[this]; }
            set { Fields.Codigo[this] = value; }
        }

        [DisplayName("Descripcion"), Column("descripcion"), Size(255), NotNull]
        public String Descripcion
        {
            get { return Fields.Descripcion[this]; }
            set { Fields.Descripcion[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Codigo; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Descripcion; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public RoezecEstadosRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField Codigo;
            public StringField Descripcion;
        }
    }
}
