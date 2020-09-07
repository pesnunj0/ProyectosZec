
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
    [ReadPermission("Inmovilizado:Read")]
    [ModifyPermission("Inmovilizado:Modify")]
    public sealed class InmovilizadosRow : Row, IIdRow, INameRow
    {
        [DisplayName("Inmovilizado Id"), Identity]
        public Int32? InmovilizadoId
        {
            get { return Fields.InmovilizadoId[this]; }
            set { Fields.InmovilizadoId[this] = value; }
        }

        [DisplayName("Codigo"), Size(20), QuickSearch]
        public String Codigo
        {
            get { return Fields.Codigo[this]; }
            set { Fields.Codigo[this] = value; }
        }

        [DisplayName("Descripción"), Size(75), NotNull, QuickSearch]
        public String Descripcion
        {
            get { return Fields.Descripcion[this]; }
            set { Fields.Descripcion[this] = value; }
        }

        [DisplayName("S/N"), Size(25), NotNull, QuickSearch]
        public String NumeroSerie
        {
            get { return Fields.NumeroSerie[this]; }
            set { Fields.NumeroSerie[this] = value; }
        }

        [DisplayName("Ubic."), Size(20), QuickSearch]
        public String Ubicacion
        {
            get { return Fields.Ubicacion[this]; }
            set { Fields.Ubicacion[this] = value; }
        }

        [DisplayName("PG"), Size(20), QuickSearch]
        public String Pg
        {
            get { return Fields.Pg[this]; }
            set { Fields.Pg[this] = value; }
        }

        [DisplayName("Sub Tipo"), NotNull, ForeignKey("subtiposinmovilizado", "SubTipoInmovilizadoId"), LeftJoin("jSubTipoInmovilizado")]
        [LookupEditor(typeof(Entities.SubtiposinmovilizadoRow), CascadeFrom = "TipoInmovilizadoId", CascadeField = "TipoInmovilizadoId")]
        public Int32? SubTipoInmovilizadoId
        {
            get { return Fields.SubTipoInmovilizadoId[this]; }
            set { Fields.SubTipoInmovilizadoId[this] = value; }
        }

        [DisplayName("Tipo Id"), Expression("jSubTipoInmovilizado.[TipoInmovilizadoId]"), ForeignKey("tiposinmovilizado", "TipoInmovilizadoId"), LeftJoin("jTipoInmovilizado")]
        [LookupEditor("Inmovilizado.Tiposinmovilizado")]
        public Int32? TipoInmovilizadoId
        {
            get { return Fields.TipoInmovilizadoId[this]; }
            set { Fields.TipoInmovilizadoId[this] = value; }
        }

        [DisplayName("Sede"), NotNull, ForeignKey("sedes", "SedeId"), LeftJoin("jSede"), TextualField("Sede"),LookupInclude]
        [LookupEditor("Intranet.Sedes", InplaceAdd = true)]
        public Int32? SedeId
        {
            get { return Fields.SedeId[this]; }
            set { Fields.SedeId[this] = value; }
        }

        [DisplayName("Proveedor"), NotNull, ForeignKey("proveedores", "ProveedorId"), LeftJoin("jProveedor"), TextualField("Proveedor"),LookupInclude]
        [LookupEditor(typeof(ProveedoresRow), InplaceAdd = true)]
        
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
        [DisplayName("Valor Residual"), Expression("T0.[Valor]-(T0.[Valor]/(T0.[Amortizacion]*12))*TIMESTAMPDIFF(MONTH, T0.[FechaCompra], CURRENT_TIMESTAMP)")]
        public Decimal? ValorResidual
        {
            get { return Fields.ValorResidual[this]; }
            set { Fields.ValorResidual[this] = value; }
        }

        [DisplayName("Fecha Baja")]
        public DateTime? FechaBaja
        {
            get { return Fields.FechaBaja[this]; }
            set { Fields.FechaBaja[this] = value; }
        }

        [DisplayName("Coste Inicial"), Size(10), Scale(2), NotNull]
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

        [DisplayName("Tipo"), Expression("jTipoInmovilizado.[Tipo]")]
        public String Tipo
        {
            get { return Fields.Tipo[this]; }
            set { Fields.Tipo[this] = value; }
        }
        [DisplayName("SubTipo"), Expression("jSubTipoInmovilizado.[SubTipo]")]
        public String SubTipo
        {
            get { return Fields.SubTipo[this]; }
            set { Fields.SubTipo[this] = value; }
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

        [DisplayName("Fotos"), Size(100),
        MultipleImageUploadEditor(FilenameFormat = "Inmovilizados/GalleryImages/~")]
        public string GalleryImages
        {
            get { return Fields.GalleryImages[this]; }
            set { Fields.GalleryImages[this] = value; }
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

            public StringField Ubicacion;
            public StringField Codigo;
            public StringField Pg;
            public StringField Descripcion;
            public StringField NumeroSerie;
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
            public readonly StringField GalleryImages;

            public StringField SubTipo;

            public StringField Sede;
            public StringField Tipo;

            public StringField Proveedor;
            public DecimalField ValorResidual;
        }
    }
}
