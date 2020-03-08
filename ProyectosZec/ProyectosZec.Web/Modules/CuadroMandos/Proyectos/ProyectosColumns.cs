
namespace ProyectosZec.CuadroMandos.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("CuadroMandos.Proyectos")]
    [BasedOnRow(typeof(Entities.ProyectosRow), CheckNames = true)]
    
    public class ProyectosColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight,Width(45)]
        public Int32 ProyectoId { get; set; }
        [EditLink]
        public String Denominacion { get; set; }
        [Width(100), QuickFilter]
        public String Sector { get; set; }
        [Width(120), QuickFilter, QuickFilterOption("CascadeFrom", "SectorId"), QuickFilterOption("multiple", true)]
        public String Subsector { get; set; }
        [Width(60),QuickFilter]
        public String Tecnico { get; set; }
        [Width(90)]
        public String Nace { get; set; }
        [Width(90)]

        public String Expediente { get; set; }
        [QuickFilter]
        [Width(60)]

        public String Isla { get; set; }
        [Width(90),QuickFilter]
        public String Capital { get; set; }
        [Width(90)]
        public String Captacion { get; set; }

        [DisplayName("Presc/Inversor"), Width(100), QuickFilter]
        public String PrescriptorInversor { get; set; }
        [Width(150)]
        public String Descripcion { get; set; }

        [Width(100)]
        public String Contacto { get; set; }

        [Width(90)]
        public String Telefono { get; set; }

        [Width(100)]
        public String Email { get; set; }

        [Width(90)]
        [QuickFilter, QuickFilterOption("multiple", true)]
        public String Estado { get; set; }

        [Width(90),  DisplayFormat("d")]
        public DateTime FechaInicio { get; set; }

        [Width(95), DisplayFormat("d")]
        public DateTime FechaPresentacion { get; set; }

        [Width(90), DisplayFormat("d")]
        public DateTime FechaInscripcion { get; set; }

        [Width(90), QuickFilter, DisplayFormat("d")]
        public DateTime FechaAutorizacion { get; set; }

        [Width(90), QuickFilter, DisplayFormat("d")]
        public DateTime FechaAmpliacion { get; set; }

        [Width(90),  DisplayFormat("d")]
        public DateTime FechaBaja { get; set; }

        [Width(60)]
        public Int32 Empleos { get; set; }

        [Width(80)]
        public Int32 Inversion { get; set; }

        [Width(80),DisplayName("Emp. Real")]
        public Int32 EmpleoReal { get; set; }

        [Width(80), DisplayName("Inv. Real")]
        public Int32 InversionReal { get; set; }
    }
}