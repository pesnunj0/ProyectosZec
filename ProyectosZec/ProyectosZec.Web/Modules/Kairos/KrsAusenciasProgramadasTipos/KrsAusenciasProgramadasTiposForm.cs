
namespace ProyectosZec.Kairos.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Kairos.KrsAusenciasProgramadasTipos")]
    [BasedOnRow(typeof(Entities.KrsAusenciasProgramadasTiposRow), CheckNames = true)]
    public class KrsAusenciasProgramadasTiposForm
    {
        public Int64 CodigoCliente { get; set; }
        public String Codigo { get; set; }
        public String Descripcion { get; set; }
        public String ColorFondo { get; set; }
        public String ColorLetra { get; set; }
        public DateTime FechaBorrado { get; set; }
        public Boolean PermitirSolicitud { get; set; }
        public DateTime FechaActualizacion { get; set; }
        public Boolean ContabilizarTiempo { get; set; }
    }
}