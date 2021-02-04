
namespace ProyectosZec.Kairos.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Kairos.Diario")]
    [BasedOnRow(typeof(Entities.DiarioRow), CheckNames = true)]
    public class DiarioColumns
    {
        [DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
 
        [Width(100), QuickFilter]
        public String Sede { get; set; }

        [DisplayName("Nº Empl."), AlignRight]
        public Int64 IdEmpleado { get; set; }

        [DisplayName("Empleado"), Width(220)]
        public String Empleado { get; set; }
        [DisplayName("Fecha"), QuickFilter, DisplayFormat("d")]
        public DateTime Fecha { get; set; }
        [DisplayName("Entrada"), Width(90)]
        public String HoraEntrada { get; set; }
        [DisplayName("Salida"),Width(90)]
        public String HoraSalida { get; set; }
    }
}