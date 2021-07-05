
namespace ProyectosZec.Nuevo_Roezec.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Nuevo_Roezec.Subsectores")]
    [BasedOnRow(typeof(Entities.SubsectoresRow), CheckNames = true)]
    public class SubsectoresForm
    {
        public Int32 SectorId { get; set; }
        public String Subsector { get; set; }
    }
}