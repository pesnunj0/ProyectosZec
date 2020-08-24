
namespace ProyectosZec.Inmovilizado.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Inmovilizado"), TableName("inmovilizados")]
    [DisplayName("Inmovilizados"), InstanceName("Inmovilizados")]
    [ReadPermission("Inmovilizado:General")]
    [ModifyPermission("Inmovilizado:General")]
    public sealed class InmovilizadosRow : Row, IIdRow, INameRow
    {
        [DisplayName("Inmovilizado Id"), Identity]
        public Int32? InmovilizadoId
        {
            get { return Fields.InmovilizadoId[this]; }
            set { Fields.InmovilizadoId[this] = value; }
        }

        [DisplayName("Descripcion"), Size(25), NotNull, QuickSearch]
        public String Descripcion
        {
            get { return Fields.Descripcion[this]; }
            set { Fields.Descripcion[this] = value; }
        }

        [DisplayName("Sub Tipo Inmovilizado"), NotNull, ForeignKey("subtiposinmovilizado", "SubTipoInmovilizadoId"), LeftJoin("jSubTipoInmovilizado"), TextualField("SubTipoInmovilizadoSubTipo")]
        [LookupEditor(typeof(Entities.TiposinmovilizadoRow), CascadeFrom = "TipoInmovilizadoId", CascadeField = "TipoInmovilizadoId")]
        public Int32? SubTipoInmovilizadoId
        {
            get { return Fields.SubTipoInmovilizadoId[this]; }
            set { Fields.SubTipoInmovilizadoId[this] = value; }
        }

        [DisplayName("Tipo Id"), Expression("jjSubTipoInmovilizado.[SubTipoInmovilizadoId]"), ForeignKey("tiposinmovilizado", "TipoInmovilizadoId"), LeftJoin("jTipoInmovilizado")]
        public Int32? TipoInmovilizadoId
        {
            get { return Fields.TipoInmovilizadoId[this]; }
            set { Fields.TipoInmovilizadoId[this] = value; }
        }

        [DisplayName("Sede"), NotNull, ForeignKey("sedes", "SedeId"), LeftJoin("jSede"), TextualField("Sede")]
        public Int32? SedeId
        {
            get { return Fields.SedeId[this]; }
            set { Fields.SedeId[this] = value; }
        }

        [DisplayName("Proveedor"), NotNull, ForeignKey("proveedores", "ProveedorId"), LeftJoin("jProveedor"), TextualField("Proveedor")]
        public Int32? ProveedorId
        {
            get { return Fields.ProveedorId[this]; }
            set { Fields.ProveedorId[this] = value; }
        }

        [DisplayName("Fecha Compra"), NotNull]
        public DateTime? FechaCompra
        {
            get { return Fields.FechaCompra[this]; }
            set { Fields.FechaCompra[this] = value; }
        }

        [DisplayName("Fecha Baja")]
        public DateTime? FechaBaja
        {
            get { return Fields.FechaBaja[this]; }
            set { Fields.FechaBaja[this] = value; }
        }

        [DisplayName("Valor"), Size(10), Scale(2), NotNull]
        public Decimal? Valor
        {
            get { return Fields.Valor[this]; }
            set { Fields.Valor[this] = value; }
        }

        [DisplayName("Amortizacion"), NotNull]
        public Int16? Amortizacion
        {
            get { return Fields.Amortizacion[this]; }
            set { Fields.Amortizacion[this] = value; }
        }

        [DisplayName("Garantia")]
        public Int16? Garantia
        {
            get { return Fields.Garantia[this]; }
            set { Fields.Garantia[this] = value; }
        }

        [DisplayName("Factura"), Size(18)]
        public String Factura
        {
            get { return Fields.Factura[this]; }
            set { Fields.Factura[this] = value; }
        }

        [DisplayName("Sub Tipo Inmovilizado Tipo Inmovilizado Id"), Expression("jSubTipoInmovilizado.[TipoInmovilizadoId]")]
        public Int32? SubTipoInmovilizadoTipoInmovilizadoId
        {
            get { return Fields.SubTipoInmovilizadoTipoInmovilizadoId[this]; }
            set { Fields.SubTipoInmovilizadoTipoInmovilizadoId[this] = value; }
        }

        [DisplayName("Sub Tipo Inmovilizado Sub Tipo"), Expression("jSubTipoInmovilizado.[SubTipo]")]
        public String SubTipoInmovilizadoSubTipo
        {
            get { return Fields.SubTipoInmovilizadoSubTipo[this]; }
            set { Fields.SubTipoInmovilizadoSubTipo[this] = value; }
        }

        [DisplayName("Sede"), Expression("jSede.[Sede]")]
        public String Sede
        {
            get { return Fields.Sede[this]; }
            set { Fields.Sede[this] = value; }
        }

        [DisplayName("Proveedor"), Expression("jProveedor.[Proveedor]")]
        public String Proveedor
        {
            get { return Fields.Proveedor[this]; }
            set { Fields.Proveedor[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.InmovilizadoId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Descripcion; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public InmovilizadosRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field InmovilizadoId;
            public StringField Descripcion;
            public Int32Field SubTipoInmovilizadoId;
            public Int32Field TipoInmovilizadoId;
            public Int32Field SedeId;
            public Int32Field ProveedorId;
            public DateTimeField FechaCompra;
            public DateTimeField FechaBaja;
            public DecimalField Valor;
            public Int16Field Amortizacion;
            public Int16Field Garantia;
            public StringField Factura;

            public Int32Field SubTipoInmovilizadoTipoInmovilizadoId;
            public StringField SubTipoInmovilizadoSubTipo;

            public StringField Sede;
            public StringField Tipo;

            public StringField Proveedor;
        }
    }
}
