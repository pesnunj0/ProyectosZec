
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
        [EditLink]
        public String Descripcion { get; set; }
        public String SubTipoInmovilizadoSubTipo { get; set; }
        public String Sede { get; set; }
        public String Proveedor { get; set; }
        public DateTime FechaCompra { get; set; }
        public DateTime FechaBaja { get; set; }
        public Decimal Valor { get; set; }
        public Int16 Amortizacion { get; set; }
        public Int16 Garantia { get; set; }
        public String Factura { get; set; }
    }
}