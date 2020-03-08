/**********************************************************************************************************************************************
Column Especial en el que pondremos en dos columnas todo el formulario.
Basado enlos nuevos estilos de serenity verisión 3.3
Ver la pagina de Volkan que indica como ya que varión del anterior de Geshotel
https://github.com/volkanceylan/Serenity-Blog/blob/master/2018-05-16-multi-column-layout.md
Utlizaremos en este caso HalfWidth(UntilNext = true)
Muy interesante lo de UntilNext = true porque permite no tener que ponerlo para todas
Interesante que para resetear ese HalfWidth(UntilNext = true) usaremos:
[ResetFormWidth]
Javier Nuñez Febrero 2020
***********************************************************************************************************************************************/
namespace ProyectosZec.CuadroMandos.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("CuadroMandos.Proyectos")]
    [BasedOnRow(typeof(Entities.ProyectosRow), CheckNames = true)]
    public class ProyectosForm
    {
        [Category("General")]
        [HalfWidth(UntilNext =true)]
        public String Denominacion { get; set; }
        [DisplayName("Técnico")]
        public String TecnicoId { get; set; }
        [DisplayName("Sector"),LookupEditor("CuadroMandos.Sectores")]    
        
        public Int32 SectorId { get; set; }

        [DisplayName("SubSector"),LookupEditor(typeof(Entities.SubsectoresRow),CascadeFrom ="SectorId")]
       
        public Int32 SubsectorId { get; set; }
        [DisplayName("Isla")]
       
        public String IslaId { get; set; }
        [DisplayName("Capital")]
       
        public Int32 CapitalId { get; set; }
       
        public String Captacion { get; set; }
        [DisplayName("Nº Empleos")]
        
        public Int32 Empleos { get; set; }
        [DisplayName("Inversión"),DisplayFormat("#,##0"), AlignRight]

        public Int32 Inversion { get; set; }
        [DisplayName("Empleo Real")]
        public Int32 EmpleoReal { get; set; }

        [DisplayName("Inversión Real"), DisplayFormat("#,##0"), AlignRight]
        public Int32 InversionReal { get; set; }
        public Int32 PrescriptorInversorId { get; set; }
        public String Expediente { get; set; }
        public String Nace { get; set; }
        public Int32 EstadoId { get; set; }
        [ResetFormWidth]
        [TextAreaEditor(Rows = 3)]
        public String Descripcion { get; set; }

        [Category("Contactos")]
        [HalfWidth(UntilNext = true)]
        public String Contacto { get; set; }
        public String Telefono { get; set; }
        public String Email { get; set; }
        
        [Category("Fechas")]
        public DateTime FechaInicio { get; set; }
        public DateTime FechaPresentacion { get; set; }
        public DateTime FechaInscripcion { get; set; }
        public DateTime FechaAutorizacion { get; set; }
        public DateTime FechaAmpliacion { get; set; }
        public DateTime FechaBaja { get; set; }

    }
}