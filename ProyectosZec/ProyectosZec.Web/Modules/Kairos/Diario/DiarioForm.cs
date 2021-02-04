
namespace ProyectosZec.Kairos.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Kairos.Diario")]
    [BasedOnRow(typeof(Entities.DiarioRow), CheckNames = true)]
    public class DiarioForm
    {
        public Int64 IdDepartamento { get; set; }
        public String Empleado { get; set; }
        public DateTime Fecha { get; set; }
        public DateTime Entrada { get; set; }
        public String HoraEntrada { get; set; }
        public DateTime Salida { get; set; }
        public String HoraSalida { get; set; }
    }
}