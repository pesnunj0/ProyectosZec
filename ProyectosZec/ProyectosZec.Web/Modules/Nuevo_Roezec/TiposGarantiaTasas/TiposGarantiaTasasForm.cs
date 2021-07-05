
namespace ProyectosZec.Nuevo_Roezec.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Nuevo_Roezec.TiposGarantiaTasas")]
    [BasedOnRow(typeof(Entities.TiposGarantiaTasasRow), CheckNames = true)]
    public class TiposGarantiaTasasForm
    {
        public String GarantiaTasa { get; set; }
    }
}