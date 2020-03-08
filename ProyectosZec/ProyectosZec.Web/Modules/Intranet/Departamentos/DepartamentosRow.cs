
namespace ProyectosZec.Intranet.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Intranet"), TableName("departamentos")]
    [DisplayName("Departamentos"), InstanceName("Departamentos")]
    [ReadPermission("Telefonos:Read")]
    [ModifyPermission("Telefonos:Modify")]
    [LookupScript("Intranet.Departamentos")]
    public sealed class DepartamentosRow : Row, IIdRow, INameRow
    {
        [DisplayName("Departamento Id"), Identity]
        public Int32? DepartamentoId
        {
            get { return Fields.DepartamentoId[this]; }
            set { Fields.DepartamentoId[this] = value; }
        }

        [DisplayName("Departamento"), Size(25), NotNull, QuickSearch]
        public String Departamento
        {
            get { return Fields.Departamento[this]; }
            set { Fields.Departamento[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.DepartamentoId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Departamento; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DepartamentosRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field DepartamentoId;
            public StringField Departamento;
        }
    }
}
