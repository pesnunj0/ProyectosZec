
namespace ProyectosZec.Roezec.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Roezec"), Module("Roezec"), TableName("roezec_nace")]
    [DisplayName("Naces"), InstanceName("Naces")]
    [ReadPermission("Roezec:Read")]
    [ModifyPermission("Roezec:Modify")]
    [InsertPermission("Roezec:Insert")]
    [DeletePermission("Roezec:Delete")]
    [LookupScript("Roezec.Naces")]
    public sealed class NacesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Nace"), Column("nace"), Size(255), QuickSearch]
        public String Nace
        {
            get { return Fields.Nace[this]; }
            set { Fields.Nace[this] = value; }
        }

        [DisplayName("Codigo"), Column("codigo"), Size(255)]
        public String Codigo
        {
            get { return Fields.Codigo[this]; }
            set { Fields.Codigo[this] = value; }
        }

        [DisplayName("Actividad"), Column("actividad"), Size(255),QuickSearch]
        public String Actividad
        {
            get { return Fields.Actividad[this]; }
            set { Fields.Actividad[this] = value; }
        }

        [DisplayName("Fecha Alta"), Expression("IF(fecha_alta='0000-00-00 00:00:00',null,fecha_alta)")]
        public DateTime? FechaAlta
        {
            get { return Fields.FechaAlta[this]; }
            set { Fields.FechaAlta[this] = value; }
        }

        [DisplayName("Usr Alta"), Column("usr_alta"), Size(255), ]
        public String UsrAlta
        {
            get { return Fields.UsrAlta[this]; }
            set { Fields.UsrAlta[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Actividad; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public NacesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Nace;
            public StringField Codigo;
            public StringField Actividad;
            public DateTimeField FechaAlta;
            public StringField UsrAlta;
        }
    }
}
