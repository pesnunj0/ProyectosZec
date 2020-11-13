
namespace ProyectosZec.Roezec.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Roezec.RoezecEmpresas")]
    [BasedOnRow(typeof(Entities.RoezecEmpresasRow), CheckNames = true)]
    public class RoezecEmpresasForm
    {
        public String DenominacionSocial { get; set; }
        public String Cif { get; set; }
        public String Direccion { get; set; }
        public String Cp { get; set; }
        public String Poblacion { get; set; }
        public String Provincia { get; set; }
        public String Isla { get; set; }
        public String NotasMarginales { get; set; }
        public Int32 AnyoExpediente { get; set; }
        public Int32 NumExpediente { get; set; }
        public Int32 Agencia { get; set; }
        public String Tecnico { get; set; }
        public String FormaJuridica { get; set; }
        public Double Superficie { get; set; }
        public String ExentaAreaAcotada { get; set; }
        public String MotivosExencion { get; set; }
        public Double ObjetivoEmpleo { get; set; }
        public Double ObjetivoInversion { get; set; }
        public String ObservacionesEmpleo { get; set; }
        public String ObservacionesInversion { get; set; }
        public Int32 PreEmpleo { get; set; }
        public Int32 PreInversion { get; set; }
        public Int32 TrasEmpleo { get; set; }
        public Int32 TrasInversion { get; set; }
        public DateTime FechaAlta { get; set; }
        public DateTime FechaModificacion { get; set; }
        public DateTime FechaBaja { get; set; }
        public String Situacion { get; set; }
        public String UsrAlta { get; set; }
        public String UsrModificacion { get; set; }
        public String UsrBaja { get; set; }
    }
}