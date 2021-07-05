
namespace ProyectosZec.Nuevo_Roezec.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Nuevo_Roezec.Empresas")]
    [BasedOnRow(typeof(Entities.EmpresasRow), CheckNames = true)]
    public class EmpresasColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 EmpresaId { get; set; }
        [EditLink]
        public String Razon { get; set; }
        public String FormaJuridicaJuridica { get; set; }
        public String NExpediente { get; set; }
        public String TecnicoNombreTecnico { get; set; }
        public String Cif { get; set; }
        public String Direccion { get; set; }
        public String Poblacion { get; set; }
        public String IslaNombreIsla { get; set; }
        public String TelefonoFijo { get; set; }
        public String Movil { get; set; }
        public String Email { get; set; }
        public String Proyecto { get; set; }
        public String Expediente { get; set; }
        public String MotivoExencion { get; set; }
        public String TipologiaCapitalCapital { get; set; }
        public String TipoGarantiaTasaGarantiaTasa { get; set; }
        public Int32 EmpleoTraspasado { get; set; }
        public Int32 Empleo6Meses { get; set; }
        public Int32 EmpleoPromedio { get; set; }
        public Int32 EmpleoPromedio2Anos { get; set; }
        public Decimal InversionTraspasada { get; set; }
        public Decimal Inversion2Anos { get; set; }
        public String EstadoEmpresaEstado { get; set; }
        public DateTime FechaAltaRegistro { get; set; }
        public DateTime FechaBajaRegistro { get; set; }
        public DateTime FechaBajaEfecto { get; set; }
        public DateTime FechaRemisionCt { get; set; }
        public DateTime FechaInformeCt { get; set; }
        public DateTime FechaRemisionCr { get; set; }
        public DateTime FechaCaducidadInscripcion { get; set; }
        public Int16 SentidoCr { get; set; }
        public Int16 SentidoCt { get; set; }
        public DateTime FechaInsSolicitud { get; set; }
        public DateTime FechaInsResolucion { get; set; }
        public DateTime FechaInsNotificacion { get; set; }
        public String NumTasaLiquidacion { get; set; }
    }
}