
namespace ProyectosZec.Nuevo_Roezec.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Roezec"), Module("Nuevo_Roezec"), TableName("idiomas")]
    [DisplayName("Idiomas"), InstanceName("Idiomas")]
    [ReadPermission("Roezec:Read")]
    [ModifyPermission("Roezec:Modify")]
    [LookupScript("Nuevo_Roezec.Idiomas")]
    public sealed class IdiomasRow : Row, IIdRow, INameRow
    {
        [DisplayName("Idioma Id"), Identity]
        public Int32? IdiomaId
        {
            get { return Fields.IdiomaId[this]; }
            set { Fields.IdiomaId[this] = value; }
        }

        [DisplayName("Idioma"), Size(5), NotNull, QuickSearch]
        public String Idioma
        {
            get { return Fields.Idioma[this]; }
            set { Fields.Idioma[this] = value; }
        }

        [DisplayName("Nombre Idioma"), Size(30), NotNull]
        public String NombreIdioma
        {
            get { return Fields.NombreIdioma[this]; }
            set { Fields.NombreIdioma[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdiomaId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.NombreIdioma; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public IdiomasRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdiomaId;
            public StringField Idioma;
            public StringField NombreIdioma;
        }
    }
}
