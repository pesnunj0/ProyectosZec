
namespace ProyectosZec.Intranet.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Intranet"), TableName("telefonos")]
    [DisplayName("Telefonos"), InstanceName("Telefonos")]
    [ReadPermission("Telefonos:Read")]
    [ModifyPermission("Telefonos:Modify")]
    [InsertPermission("Telefonos:Insert")]
    [DeletePermission("Telefonos:Delete")]
    [LookupScript("Telefonos.Telefonos")]
    public sealed class TelefonosRow : Row, IIdRow, INameRow
    {
        [DisplayName("Telefono Id"), Identity]
        public Int32? TelefonoId
        {
            get { return Fields.TelefonoId[this]; }
            set { Fields.TelefonoId[this] = value; }
        }

        [DisplayName("Sede"), NotNull, ForeignKey("sedes", "SedeId"), LeftJoin("jSede"), TextualField("Sede")]
        [LookupEditor("Intranet.Sedes")]
        public Int32? SedeId
        {
            get { return Fields.SedeId[this]; }
            set { Fields.SedeId[this] = value; }
        }

        [DisplayName("Departamento"), NotNull, ForeignKey("departamentos", "DepartamentoId"), LeftJoin("jDepartamento"), TextualField("Departamento")]
        [LookupEditor("Intranet.Departamentos")]
        public Int32? DepartamentoId
        {
            get { return Fields.DepartamentoId[this]; }
            set { Fields.DepartamentoId[this] = value; }
        }

        [DisplayName("Nombre"), Size(30), NotNull, QuickSearch]
        public String Nombre
        {
            get { return Fields.Nombre[this]; }
            set { Fields.Nombre[this] = value; }
        }

        [DisplayName("Ext Corta"), Size(5), NotNull]
        public String ExtCorta
        {
            get { return Fields.ExtCorta[this]; }
            set { Fields.ExtCorta[this] = value; }
        }

        [DisplayName("Fijo"), Size(9), NotNull]
        public String Fijo
        {
            get { return Fields.Fijo[this]; }
            set { Fields.Fijo[this] = value; }
        }

        [DisplayName("Movil"), Size(9)]
        public String Movil
        {
            get { return Fields.Movil[this]; }
            set { Fields.Movil[this] = value; }
        }

        [DisplayName("Sede"), Expression("jSede.[Sede]")]
        public String Sede
        {
            get { return Fields.Sede[this]; }
            set { Fields.Sede[this] = value; }
        }

        [DisplayName("Departamento"), Expression("jDepartamento.[Departamento]")]
        public String Departamento
        {
            get { return Fields.Departamento[this]; }
            set { Fields.Departamento[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.TelefonoId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Nombre; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TelefonosRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field TelefonoId;
            public Int32Field SedeId;
            public Int32Field DepartamentoId;
            public StringField Nombre;
            public StringField ExtCorta;
            public StringField Fijo;
            public StringField Movil;

            public StringField Sede;

            public StringField Departamento;
        }
    }
}
