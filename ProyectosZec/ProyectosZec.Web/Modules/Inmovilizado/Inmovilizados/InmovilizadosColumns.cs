
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
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 InmovilizadoId { get; set; }
        [EditLink,Width(150)]
        public String Descripcion { get; set; }
        [Width(90)]
        public String NumeroSerie { get; set; }
        [Width(70),QuickFilter, LookupEditor(typeof(Entities.TiposinmovilizadoRow))]
        public String Tipo { get; set; }
        [Width(100), QuickFilter, LookupEditor(typeof(Entities.SubtiposinmovilizadoRow), CascadeFrom = "TipoInmovilizadoId")]
        public String SubTipo { get; set; }
        [Width(100),QuickFilter]
        public String Sede { get; set; }
        [Width(120),QuickFilter]
        public String Proveedor { get; set; }
        [Width(90), QuickFilter, DisplayFormat("d")]
        public DateTime FechaCompra { get; set; }
        [Width(90), QuickFilter, DisplayFormat("d")]
        public DateTime FechaBaja { get; set; }
        public Decimal Valor { get; set; }
        public Int16 Amortizacion { get; set; }
        public Int16 Garantia { get; set; }
        public String Factura { get; set; }
    }
}