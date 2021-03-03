
namespace ProyectosZec.Kairos.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Kairos"), Module("Kairos"), TableName("[dbo].[KRS_Departamentos]")]
    [DisplayName("Departamentos"), InstanceName("Departamentos")]
    [ReadPermission("Kairos:Read")]
    [ModifyPermission("Kairos:Modify")]
    [InsertPermission("Kairos:Insert")]
    [DeletePermission("Kairos:Delete")]

    public sealed class DepartamentosRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("id"), PrimaryKey]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Codigo Cliente"), Column("codigoCliente"), PrimaryKey]
        public Int64? CodigoCliente
        {
            get { return Fields.CodigoCliente[this]; }
            set { Fields.CodigoCliente[this] = value; }
        }

        [DisplayName("Codigo"), Column("codigo"), Size(10), NotNull, QuickSearch]
        public String Codigo
        {
            get { return Fields.Codigo[this]; }
            set { Fields.Codigo[this] = value; }
        }

        [DisplayName("Descripcion"), Column("descripcion"), Size(50), NotNull]
        public String Descripcion
        {
            get { return Fields.Descripcion[this]; }
            set { Fields.Descripcion[this] = value; }
        }

        [DisplayName("Fecha Borrado"), Column("fechaBorrado")]
        public DateTime? FechaBorrado
        {
            get { return Fields.FechaBorrado[this]; }
            set { Fields.FechaBorrado[this] = value; }
        }

        [DisplayName("Sede Id"), Column("sedeId")]
        public Int32? SedeId
        {
            get { return Fields.SedeId[this]; }
            set { Fields.SedeId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Codigo; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DepartamentosRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public Int64Field CodigoCliente;
            public StringField Codigo;
            public StringField Descripcion;
            public DateTimeField FechaBorrado;
            public Int32Field SedeId;
        }
    }
}
