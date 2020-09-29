
namespace ProyectosZec.Inmovilizado.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Inmovilizado.Inmovilizados")]
    [BasedOnRow(typeof(Entities.InmovilizadosRow), CheckNames = true)]
    public class InmovilizadosColumns
    {
        [Hidden,EditLink,Width(30), DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 InmovilizadoId { get; set; }
        [EditLink,Width(60)]
        public String Codigo { get; set; }
        [EditLink,Width(270)]
        public String Descripcion { get; set; }
        [Width(130)]
        public String NumeroSerie { get; set; }
        [Width(130)]
        public String Ubicacion { get; set; }
        [Width(70)]
        public String Pg { get; set; }

        [Width(70),QuickFilter]
        public String Tipo { get; set; }
        [Width(220), QuickFilter, QuickFilterOption("CascadeFrom", "TipoInmovilizadoId"), QuickFilterOption("multiple", true)]
        public String SubTipo { get; set; }
        [Width(100),QuickFilter]
        public String Sede { get; set; }
        [Width(180),QuickFilter]
        public String Proveedor { get; set; }
        [Width(90), DisplayName("F.Compra"),QuickFilter, DisplayFormat("d")]
        public DateTime FechaCompra { get; set; }

        [Width(90), DisplayName("F. Baja"), QuickFilter, DisplayFormat("d")]
        public DateTime FechaBaja { get; set; }
        [Width(90), DisplayName("V. Inicial"), DisplayFormat("#,##0.00")]
        public Decimal Valor { get; set; }
        [Width(60),DisplayName("Amort.")]
        public Int16 Amortizacion { get; set; }
        [Width(90), DisplayName("V. Residual"), DisplayFormat("#,##0.00")]
        public Decimal ValorResidual { get; set; }
        [Width(60), DisplayName("Garant.")]
        
        public Int16 Garantia { get; set; }
        [Width(100)]
        public String Factura { get; set; }
    }
}