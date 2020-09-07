
namespace ProyectosZec.Inmovilizado.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Inmovilizado.Inmovilizados")]
    [BasedOnRow(typeof(Entities.InmovilizadosRow), CheckNames = true)]
    public class InmovilizadosForm
    {
        public String Codigo { get; set; }
        public String Descripcion { get; set; }

        public String Ubicacion { get; set; }

        public String NumeroSerie { get; set; }

        [DisplayName("Tipo"), LookupEditor(typeof(Entities.TiposinmovilizadoRow))]
        public Int32 TipoInmovilizadoId { get; set; }

        [DisplayName("SubTipo"), LookupEditor(typeof(Entities.SubtiposinmovilizadoRow), CascadeFrom = "TipoInmovilizadoId")]
        public Int32 SubTipoInmovilizadoId { get; set; }
        public String Pg { get; set; }
        [LookupEditor("Intranet.Sedes")]
        public Int32 SedeId { get; set; }
        [DisplayName("Proveedor")]
        public Int32 ProveedorId { get; set; }
        public DateTime FechaCompra { get; set; }
        public DateTime FechaBaja { get; set; }
        public Decimal Valor { get; set; }
        public Int16 Amortizacion { get; set; }
        public Int16 Garantia { get; set; }
        public String Factura { get; set; }
        public String GalleryImages { get; set; }
    }
}