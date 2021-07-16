
namespace ProyectosZec.Nuevo_Roezec.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Nuevo_Roezec.Empresas")]
    [BasedOnRow(typeof(Entities.EmpresasRow), CheckNames = true)]
    public class EmpresasForm
    {
        [Tab("General")]
        
        public String Razon { get; set; }
        [HalfWidth(UntilNext = true)]
        public Int32 FormaJuridicaId { get; set; }
        public Int32 TecnicoId { get; set; }
        public String Cif { get; set; }
        public Int32 ProyectoId { get; set; }
        public String Expediente { get; set; }
        public String MotivoExencion { get; set; }
        public Int32 TipologiaCapitalId { get; set; }
        public Int32 TipoGarantiaTasaId { get; set; }
        public Int32 EstadoEmpresaId { get; set; }
        
        [ResetFormWidth]
        public String Direccion { get; set; }
        public String Poblacion { get; set; }

        [HalfWidth(UntilNext = true)]
        
        public String Cp { get; set; }
        public Int32 IslaId { get; set; }
        public String TelefonoFijo { get; set; }
        public String Movil { get; set; }
        [ResetFormWidth]
        [EmailEditor]
        public String Email { get; set; }
  
        [Tab("Objetivos")]
        [HalfWidth(UntilNext = true)]
        public Int32 EmpleoTraspasado { get; set; }
        public Int32 Empleo6Meses { get; set; }
        public Int32 EmpleoPromedio { get; set; }
        public Int32 EmpleoPromedio2Anos { get; set; }
        public Decimal InversionTraspasada { get; set; }
        public Decimal Inversion2Anos { get; set; }
        public String NumTasaLiquidacion { get; set; }

        //[ResetFormWidth]
        //[Tab("Estado")]

        //public DateTime FechaAltaRegistro { get; set; }
        //public DateTime FechaBajaRegistro { get; set; }
        //public DateTime FechaBajaEfecto { get; set; }
        //public DateTime FechaRemisionCt { get; set; }
        //public DateTime FechaInformeCt { get; set; }
        //public DateTime FechaRemisionCr { get; set; }
        //public DateTime FechaCaducidadInscripcion { get; set; }
        //public Int16 SentidoCr { get; set; }
        //public Int16 SentidoCt { get; set; }
        //public DateTime FechaInsSolicitud { get; set; }
        //public DateTime FechaInsResolucion { get; set; }
        //public DateTime FechaInsNotificacion { get; set; }

        [Tab("Historial")]
        [HistorialEmpresasEditor]      
        public List<Entities.HistorialEmpresasRow> HistorialList { get; set; }



    }
}