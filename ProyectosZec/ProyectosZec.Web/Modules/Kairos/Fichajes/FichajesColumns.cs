
namespace ProyectosZec.Kairos.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Kairos.Fichajes")]
    [BasedOnRow(typeof(Entities.FichajesRow), CheckNames = true)]
    public class FichajesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight,Width(60)]
        public Int64 Id { get; set; }

        [Width(100), QuickFilter]
        public String Sede { get; set; }

        [DisplayName("Nº Empl."), AlignRight]
        public Int64 IdEmpleado { get; set; }
 
        [DisplayName("Empleado"), Width(220)]
        public String Empleado { get; set; }

        [DisplayName("Fecha"), QuickFilter, DisplayFormat("d")]
        public DateTime FechaHora { get; set; }

        [DisplayName("Hora"), Width(80)]
        public String Hora { get; set; }
        [QuickFilter, Width(90), DisplayName("Fichaje")]
        public String Fichaje { get; set; }
        
        [Width(110)]
        public String Dispositivo { get; set; }
        [Width(300)]
        public String Observaciones { get; set; }
        public DateTime Modificado { get; set; }
        public DateTime Anulado { get; set; }
        public Int32 Validado { get; set; }


 
    }
}