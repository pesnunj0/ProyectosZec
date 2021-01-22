
namespace ProyectosZec.Kairos.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Kairos.KrsEmpleados")]
    [BasedOnRow(typeof(Entities.KrsEmpleadosRow), CheckNames = true)]
    public class KrsEmpleadosForm
    {
        public Int64 CodigoCliente { get; set; }
        public String Nombre { get; set; }
        public String CodigoValidacion { get; set; }
        public DateTime FechaBaja { get; set; }
        public Int32 Pin { get; set; }
        public Boolean Tecnico { get; set; }
        public String UsoHorario { get; set; }
        public Boolean SacarFotoFichaje { get; set; }
        public DateTime FechaActualizacion { get; set; }
        public DateTime FechaBorrado { get; set; }
        public String NumeroTarjetaFichaje { get; set; }
        public Int64 IdDepartamento { get; set; }
        public Int64 IdEmpresa { get; set; }
        public String Email { get; set; }
        public Boolean PermiteRecordatorio { get; set; }
        public Boolean PermiteFichajeAutomatico { get; set; }
        public Int64 IdEmpresaFichajeAutomatico { get; set; }
        public String ProgramaExternoIdEmpleado { get; set; }
        public String ProgramaExternoDescripcion { get; set; }
        public Int64 IdHoraExtraCabecera { get; set; }
        public String ClaveAccesoWeb { get; set; }
        public Boolean PermiteFichajeWeb { get; set; }
    }
}