
namespace ProyectosZec.Inmovilizado.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Inmovilizado"), TableName("proveedores")]
    [DisplayName("Proveedores"), InstanceName("Proveedores")]
    [ReadPermission("Inmovilizado:Read")]
    [ModifyPermission("Inmovilizado:Modify")]
    [LookupScript("Inmovilizado.Proveedores")]
    public sealed class ProveedoresRow : Row, IIdRow, INameRow
    {
        [DisplayName("Proveedor Id"), Identity]
        public Int32? ProveedorId
        {
            get { return Fields.ProveedorId[this]; }
            set { Fields.ProveedorId[this] = value; }
        }

        [DisplayName("Proveedor"), Size(45), NotNull, QuickSearch]
        public String Proveedor
        {
            get { return Fields.Proveedor[this]; }
            set { Fields.Proveedor[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ProveedorId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Proveedor; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProveedoresRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ProveedorId;
            public StringField Proveedor;
        }
    }
}
