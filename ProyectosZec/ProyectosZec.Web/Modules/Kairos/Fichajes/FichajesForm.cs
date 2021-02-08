
namespace ProyectosZec.Kairos.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Kairos.Fichajes")]
    [BasedOnRow(typeof(Entities.FichajesRow), CheckNames = true)]
    public class FichajesForm
    {
        public Int64 IdEmpleado { get; set; }
        public Int64 CodigoCliente { get; set; }
        [DisplayFormat("g")]
        public DateTime FechaHora { get; set; }
        public String Observaciones { get; set; }
        public String GpsPosicionLatitud { get; set; }
        public String GpsPosicionLongitud { get; set; }
        [DisplayFormat("g")]
        public DateTime GpsFechaHora { get; set; }
        public String GpsProveedor { get; set; }
        public String GpsAltitud { get; set; }
        public Int64 IdTerminal { get; set; }
        public Int64 IdDispositivoModelo { get; set; }
        public DateTime Modificado { get; set; }
        public DateTime Anulado { get; set; }
        public Int32 Validado { get; set; }
        public Int32 TipoDispositivo { get; set; }
        public String EntradaSalida { get; set; }
        public Int64 IdEmpresa { get; set; }
    }
}