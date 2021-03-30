
namespace ProyectosZec.Kairos.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Kairos.Extras")]
    [BasedOnRow(typeof(Entities.ExtrasRow), CheckNames = true)]
    public class ExtrasForm
    {
        [HalfWidth(UntilNext = true)]
        public Int64 Id { get; set; }
        public Int64 CodigoCliente { get; set; }
        public Int64 IdEmpleado { get; set; }
        public DateTime Fecha { get; set; }
        [DisplayName("Id Cabecera")]
        public Int64 IdHoraExtraCabecera { get; set; }
        public Int32 Tipo { get; set; }
        public Decimal TotalHorasExtrasReales { get; set; }
        public Decimal TotalHorasExtrasConvertidas { get; set; }
        public Int64 IdAusenciaProgramadaTipo { get; set; }
        public String Dia { get; set; }
        [DisplayName("Estado")]
        public String Estado { get; set; }
        [DisplayName("Motivo Canc.")]
        public String MotivoCancelacion { get; set; }
        [DisplayName("F.Acept/Canc")]
        public DateTime FechaAceptacionCancelacion { get; set; }
        [ResetFormWidth]
        [HorasExtraConsumidasEditor]
        public List<Entities.HorasExtraConsumidasRow> Consumidas  { get; set; }
    }
}