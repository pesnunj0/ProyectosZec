
namespace ProyectosZec.Nuevo_Roezec.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Roezec"), Module("Nuevo_Roezec"), TableName("contactos")]
    [DisplayName("Contactos"), InstanceName("Contactos")]
    [ReadPermission("Roezec:Read")]
    [ModifyPermission("Roezec:Modify")]
    [LookupScript("Nuevo_Roezec.Contactos")]
    public sealed class ContactosRow : Row, IIdRow, INameRow
    {
        [DisplayName("Contacto Id"), Identity]
        public Int32? ContactoId
        {
            get { return Fields.ContactoId[this]; }
            set { Fields.ContactoId[this] = value; }
        }

        [DisplayName("Nombre"), Size(45), NotNull, QuickSearch]
        public String Nombre
        {
            get { return Fields.Nombre[this]; }
            set { Fields.Nombre[this] = value; }
        }

        [DisplayName("Apellidos"), Size(45), NotNull]
        public String Apellidos
        {
            get { return Fields.Apellidos[this]; }
            set { Fields.Apellidos[this] = value; }
        }

        [DisplayName("Nif"), Size(20)]
        public String Nif
        {
            get { return Fields.Nif[this]; }
            set { Fields.Nif[this] = value; }
        }

        [DisplayName("Telefono Fijo"), Column("Telefono_fijo"), Size(20)]
        public String TelefonoFijo
        {
            get { return Fields.TelefonoFijo[this]; }
            set { Fields.TelefonoFijo[this] = value; }
        }

        [DisplayName("Movil"), Size(20)]
        public String Movil
        {
            get { return Fields.Movil[this]; }
            set { Fields.Movil[this] = value; }
        }

        [DisplayName("Idioma"), ForeignKey("idiomas", "IdiomaId"), LeftJoin("jIdioma"), TextualField("Idioma")]
        public Int32? IdiomaId
        {
            get { return Fields.IdiomaId[this]; }
            set { Fields.IdiomaId[this] = value; }
        }

        [DisplayName("Email"), Size(75)]
        public String Email
        {
            get { return Fields.Email[this]; }
            set { Fields.Email[this] = value; }
        }

        [DisplayName("Idioma"), Expression("jIdioma.[Idioma]")]
        public String Idioma
        {
            get { return Fields.Idioma[this]; }
            set { Fields.Idioma[this] = value; }
        }

        [DisplayName("Idioma Nombre Idioma"), Expression("jIdioma.[NombreIdioma]")]
        public String IdiomaNombreIdioma
        {
            get { return Fields.IdiomaNombreIdioma[this]; }
            set { Fields.IdiomaNombreIdioma[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ContactoId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Nombre; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ContactosRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ContactoId;
            public StringField Nombre;
            public StringField Apellidos;
            public StringField Nif;
            public StringField TelefonoFijo;
            public StringField Movil;
            public Int32Field IdiomaId;
            public StringField Email;

            public StringField Idioma;
            public StringField IdiomaNombreIdioma;
        }
    }
}
