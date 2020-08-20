
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
        public String Descripcion { get; set; }
        public Int32 SubTipoInmovilizadoId { get; set; }
        public Int32 SedeId { get; set; }
        public Int32 ProveedorId { get; set; }
        public DateTime FechaCompra { get; set; }
        public DateTime FechaBaja { get; set; }
        public Decimal Valor { get; set; }
        public Int16 Amortizacion { get; set; }
        public Int16 Garantia { get; set; }
        public String Factura { get; set; }
    }
}